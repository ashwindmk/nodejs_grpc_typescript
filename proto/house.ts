import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HouseServiceClient as _houseservice_HouseServiceClient, HouseServiceDefinition as _houseservice_HouseServiceDefinition } from './houseservice/HouseService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  houseservice: {
    House: MessageTypeDefinition
    HouseRequest: MessageTypeDefinition
    HouseResponse: MessageTypeDefinition
    HouseService: SubtypeConstructor<typeof grpc.Client, _houseservice_HouseServiceClient> & { service: _houseservice_HouseServiceDefinition }
    HousesBySizeRequest: MessageTypeDefinition
    HousesBySizeResponse: MessageTypeDefinition
    HousesRequest: MessageTypeDefinition
    HousesResponse: MessageTypeDefinition
    NoParams: MessageTypeDefinition
  }
}

