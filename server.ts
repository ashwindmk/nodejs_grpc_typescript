import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { HouseServiceHandlers } from './proto/houseservice/HouseService';
import { ProtoGrpcType } from './proto/house';
import { House } from './proto/houseservice/House';
import { HousesBySizeRequest } from './proto/houseservice/HousesBySizeRequest';
import { HousesBySizeResponse } from './proto/houseservice/HousesBySizeResponse';
import { HouseRequest } from './proto/houseservice/HouseRequest';
import { HouseResponse } from './proto/houseservice/HouseResponse';
import { HousesRequest } from './proto/houseservice/HousesRequest';
import { HousesResponse } from './proto/houseservice/HousesResponse';

const allHouse: House[] = [
    {
      id: 1,
      number: "123",
      area: 1200,
      street: "Funny Street",
    },
    {
      id: 2,
      number: "500",
      area: 2000,
      street: "Zoo",
    },
    {
      id: 3,
      number: "67",
      area: 890,
      street: "Spring Cir",
    },
];

const houseService : HouseServiceHandlers = {
    getHousesBySize(
        call: grpc.ServerUnaryCall<HousesBySizeRequest, HousesBySizeResponse>,
        callback: grpc.sendUnaryData<HousesBySizeResponse>
    ): void {
        const request = call.request;
        const min = request.minArea;
        const ids: (number | undefined)[] = allHouse
          .filter((d) => {
            if (d.area && min) {
              return d.area >= min;
            } else {
              return false;
            }
          })
          .map((f) => f.id);

        const response: HousesBySizeResponse = {};
        if (ids != undefined) {
          response.ids = ids as number[];
        } else {
          response.ids = [];
        }

        callback(null, response);
    },
    
    getHouse(
        call: grpc.ServerUnaryCall<HouseRequest, HouseResponse>,
        callback: grpc.sendUnaryData<HouseResponse>
    ): void {
        const request = call.request;
        const house = allHouse.filter((d) => d.id === request.id).shift();
        const response: HouseResponse = {};
        const houseGrpc: House = {};
        if (house !== undefined) {
          houseGrpc.id = house.id;
          houseGrpc.street = house.street;
          houseGrpc.number = house.number;
        }
        response.house = houseGrpc;
        callback(null, response);
    },
    
    getHouses(
        call: grpc.ServerUnaryCall<HousesRequest, HousesResponse>,
        callback: grpc.sendUnaryData<HousesResponse>
    ): void {
        const response: HousesResponse = {};
        response.houses = allHouse;
        callback(null, response);
    },

    getHousesByIds(
      call: grpc.ServerUnaryCall<HousesRequest, HousesResponse>,
      callback: grpc.sendUnaryData<HousesResponse>
  ): void {
      const request = call.request;
      const houses = request.ids;
      const response: HousesResponse = {};
      const housesObj: House[] = houses!!
        .map((d: Number) => allHouse.find((ff) => ff.id === d))
        .map((h: (House | undefined)) => {
          const c: House = {};
          if (h !== undefined) {
            c.id = h.id;
            c.street = h.street;
            c.number = h.number;
          }
          return c;
        });

      response.houses = housesObj;

      callback(null, response);
  }
}

const server = new grpc.Server();
const packageDef = protoLoader.loadSync('./house.proto');
const proto = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
server.addService(proto.houseservice.HouseService.service, houseService);

const host = '0.0.0.0:50000';

server.bindAsync(
  host,
  grpc.ServerCredentials.createInsecure(),
  (err: Error | null, port: number) => {
    if (err) {
      console.error(`Server error: ${err.message}`);
    } else {
      console.log(`Server bound on port: ${port}`);
      server.start();
    }
  }
);
