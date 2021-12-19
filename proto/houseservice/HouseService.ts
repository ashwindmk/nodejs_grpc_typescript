// Original file: house.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HouseRequest as _houseservice_HouseRequest, HouseRequest__Output as _houseservice_HouseRequest__Output } from '../houseservice/HouseRequest';
import type { HouseResponse as _houseservice_HouseResponse, HouseResponse__Output as _houseservice_HouseResponse__Output } from '../houseservice/HouseResponse';
import type { HousesBySizeRequest as _houseservice_HousesBySizeRequest, HousesBySizeRequest__Output as _houseservice_HousesBySizeRequest__Output } from '../houseservice/HousesBySizeRequest';
import type { HousesBySizeResponse as _houseservice_HousesBySizeResponse, HousesBySizeResponse__Output as _houseservice_HousesBySizeResponse__Output } from '../houseservice/HousesBySizeResponse';
import type { HousesRequest as _houseservice_HousesRequest, HousesRequest__Output as _houseservice_HousesRequest__Output } from '../houseservice/HousesRequest';
import type { HousesResponse as _houseservice_HousesResponse, HousesResponse__Output as _houseservice_HousesResponse__Output } from '../houseservice/HousesResponse';
import type { NoParams as _houseservice_NoParams, NoParams__Output as _houseservice_NoParams__Output } from '../houseservice/NoParams';

export interface HouseServiceClient extends grpc.Client {
  getHouse(argument: _houseservice_HouseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HouseResponse__Output) => void): grpc.ClientUnaryCall;
  getHouse(argument: _houseservice_HouseRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _houseservice_HouseResponse__Output) => void): grpc.ClientUnaryCall;
  getHouse(argument: _houseservice_HouseRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HouseResponse__Output) => void): grpc.ClientUnaryCall;
  getHouse(argument: _houseservice_HouseRequest, callback: (error?: grpc.ServiceError, result?: _houseservice_HouseResponse__Output) => void): grpc.ClientUnaryCall;
  getHouse(argument: _houseservice_HouseRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HouseResponse__Output) => void): grpc.ClientUnaryCall;
  getHouse(argument: _houseservice_HouseRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _houseservice_HouseResponse__Output) => void): grpc.ClientUnaryCall;
  getHouse(argument: _houseservice_HouseRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HouseResponse__Output) => void): grpc.ClientUnaryCall;
  getHouse(argument: _houseservice_HouseRequest, callback: (error?: grpc.ServiceError, result?: _houseservice_HouseResponse__Output) => void): grpc.ClientUnaryCall;
  
  getHouses(argument: _houseservice_NoParams, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHouses(argument: _houseservice_NoParams, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHouses(argument: _houseservice_NoParams, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHouses(argument: _houseservice_NoParams, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHouses(argument: _houseservice_NoParams, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHouses(argument: _houseservice_NoParams, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHouses(argument: _houseservice_NoParams, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHouses(argument: _houseservice_NoParams, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  
  getHousesByIds(argument: _houseservice_HousesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesByIds(argument: _houseservice_HousesRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesByIds(argument: _houseservice_HousesRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesByIds(argument: _houseservice_HousesRequest, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesByIds(argument: _houseservice_HousesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesByIds(argument: _houseservice_HousesRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesByIds(argument: _houseservice_HousesRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesByIds(argument: _houseservice_HousesRequest, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesResponse__Output) => void): grpc.ClientUnaryCall;
  
  getHousesBySize(argument: _houseservice_HousesBySizeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesBySizeResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesBySize(argument: _houseservice_HousesBySizeRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesBySizeResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesBySize(argument: _houseservice_HousesBySizeRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesBySizeResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesBySize(argument: _houseservice_HousesBySizeRequest, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesBySizeResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesBySize(argument: _houseservice_HousesBySizeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesBySizeResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesBySize(argument: _houseservice_HousesBySizeRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesBySizeResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesBySize(argument: _houseservice_HousesBySizeRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesBySizeResponse__Output) => void): grpc.ClientUnaryCall;
  getHousesBySize(argument: _houseservice_HousesBySizeRequest, callback: (error?: grpc.ServiceError, result?: _houseservice_HousesBySizeResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface HouseServiceHandlers extends grpc.UntypedServiceImplementation {
  getHouse: grpc.handleUnaryCall<_houseservice_HouseRequest__Output, _houseservice_HouseResponse>;
  
  getHouses: grpc.handleUnaryCall<_houseservice_NoParams__Output, _houseservice_HousesResponse>;
  
  getHousesByIds: grpc.handleUnaryCall<_houseservice_HousesRequest__Output, _houseservice_HousesResponse>;
  
  getHousesBySize: grpc.handleUnaryCall<_houseservice_HousesBySizeRequest__Output, _houseservice_HousesBySizeResponse>;
  
}

export interface HouseServiceDefinition extends grpc.ServiceDefinition {
  getHouse: MethodDefinition<_houseservice_HouseRequest, _houseservice_HouseResponse, _houseservice_HouseRequest__Output, _houseservice_HouseResponse__Output>
  getHouses: MethodDefinition<_houseservice_NoParams, _houseservice_HousesResponse, _houseservice_NoParams__Output, _houseservice_HousesResponse__Output>
  getHousesByIds: MethodDefinition<_houseservice_HousesRequest, _houseservice_HousesResponse, _houseservice_HousesRequest__Output, _houseservice_HousesResponse__Output>
  getHousesBySize: MethodDefinition<_houseservice_HousesBySizeRequest, _houseservice_HousesBySizeResponse, _houseservice_HousesBySizeRequest__Output, _houseservice_HousesBySizeResponse__Output>
}
