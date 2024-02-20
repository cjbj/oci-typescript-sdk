/**
 * OneSubscription API Subscription, Commitment and and Rate Card Details
 * Set of APIs that return the Subscription Details, Commitment and Effective Rate Card Details

 * OpenAPI spec version: 20210501
 * Contact: kuaskum_org_ww@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import {
  composeResponse,
  composeRequest,
  GenericRetrier,
  developerToolConfiguration
} from "oci-common";
const Breaker = require("opossum");

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CommitmentApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class CommitmentClient {
  protected static serviceEndpointTemplate = "https://csaap-e.oracle.com";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "Commitment";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
      this._bodyDuplexMode = clientConfiguration.bodyDuplexMode
        ? clientConfiguration.bodyDuplexMode
        : undefined;
    }

    if (!developerToolConfiguration.isServiceEnabled("osubsubscription")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("osubsubscription");
    }

    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(
        requestSigner,
        this._circuitBreaker,
        this._httpOptions,
        this._bodyDuplexMode
      );

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/oalapp/service/onesubs/proxy/20210501";
    if (this.logger) this.logger.info(`CommitmentClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Determines whether realm specific endpoint should be used or not.
   * Set realmSpecificEndpointTemplateEnabled to "true" if the user wants to enable use of realm specific endpoint template, otherwise set it to "false"
   * @param realmSpecificEndpointTemplateEnabled flag to enable the use of realm specific endpoint template
   */
  public set useRealmSpecificEndpointTemplate(realmSpecificEndpointTemplateEnabled: boolean) {
    this._realmSpecificEndpointTemplateEnabled = realmSpecificEndpointTemplateEnabled;
    if (this.logger)
      this.logger.info(
        `realmSpecificEndpointTemplateEnabled set to ${this._realmSpecificEndpointTemplateEnabled}`
      );
    if (this._lastSetRegionOrRegionId === common.Region.REGION_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
        CommitmentClient.serviceEndpointTemplate,
        this._region,
        CommitmentClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        CommitmentClient.serviceEndpointTemplate,
        this._regionId,
        CommitmentClient.endpointServiceName
      );
    }
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this._region = region;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      CommitmentClient.serviceEndpointTemplate,
      region,
      CommitmentClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_STRING;
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this._regionId = regionId;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      CommitmentClient.serviceEndpointTemplate,
      regionId,
      CommitmentClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Shutdown the circuit breaker used by the client when it is no longer needed
   */
  public shutdownCircuitBreaker() {
    if (this._circuitBreaker) {
      this._circuitBreaker.shutdown();
    }
  }

  /**
   * This API returns the commitment details corresponding to the id provided
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetCommitmentRequest
   * @return GetCommitmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubsubscription/GetCommitment.ts.html |here} to see how to use GetCommitment API.
   */
  public async getCommitment(
    getCommitmentRequest: requests.GetCommitmentRequest
  ): Promise<responses.GetCommitmentResponse> {
    if (this.logger) this.logger.debug("Calling operation CommitmentClient#getCommitment.");
    const operationName = "getCommitment";
    const apiReferenceLink = "";
    const pathParams = {
      "{commitmentId}": getCommitmentRequest.commitmentId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getCommitmentRequest.opcRequestId,
      "x-one-gateway-subscription-id": getCommitmentRequest.xOneGatewaySubscriptionId,
      "x-one-origin-region": getCommitmentRequest.xOneOriginRegion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getCommitmentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/commitments/{commitmentId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetCommitmentResponse>{},
        body: await response.json(),
        bodyKey: "commitmentDetail",
        bodyModel: model.CommitmentDetail,
        type: "model.CommitmentDetail",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * This list API returns all commitments for a particular Subscribed Service
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListCommitmentsRequest
   * @return ListCommitmentsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubsubscription/ListCommitments.ts.html |here} to see how to use ListCommitments API.
   */
  public async listCommitments(
    listCommitmentsRequest: requests.ListCommitmentsRequest
  ): Promise<responses.ListCommitmentsResponse> {
    if (this.logger) this.logger.debug("Calling operation CommitmentClient#listCommitments.");
    const operationName = "listCommitments";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "subscribedServiceId": listCommitmentsRequest.subscribedServiceId,
      "compartmentId": listCommitmentsRequest.compartmentId,
      "limit": listCommitmentsRequest.limit,
      "page": listCommitmentsRequest.page,
      "sortOrder": listCommitmentsRequest.sortOrder,
      "sortBy": listCommitmentsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listCommitmentsRequest.opcRequestId,
      "x-one-gateway-subscription-id": listCommitmentsRequest.xOneGatewaySubscriptionId,
      "x-one-origin-region": listCommitmentsRequest.xOneOriginRegion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listCommitmentsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/commitments",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListCommitmentsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.CommitmentSummary,
        type: "Array<model.CommitmentSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listCommitmentsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.CommitmentSummary objects
   * contained in responses from the listCommitments operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllCommitments(
    request: requests.ListCommitmentsRequest
  ): AsyncIterableIterator<model.CommitmentSummary> {
    return paginateRecords(request, req => this.listCommitments(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listCommitmentsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listCommitments operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllCommitmentsResponses(
    request: requests.ListCommitmentsRequest
  ): AsyncIterableIterator<responses.ListCommitmentsResponse> {
    return paginateResponses(request, req => this.listCommitments(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.CommitmentSummary objects
   * contained in responses from the listCommitments operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listCommitmentsRecordIterator(
    request: requests.ListCommitmentsRequest
  ): AsyncIterableIterator<model.CommitmentSummary> {
    return paginateRecords(request, req => this.listCommitments(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listCommitments operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listCommitmentsResponseIterator(
    request: requests.ListCommitmentsRequest
  ): AsyncIterableIterator<responses.ListCommitmentsResponse> {
    return paginateResponses(request, req => this.listCommitments(req));
  }
}
export enum RatecardApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class RatecardClient {
  protected static serviceEndpointTemplate = "https://csaap-e.oracle.com";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "Ratecard";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
      this._bodyDuplexMode = clientConfiguration.bodyDuplexMode
        ? clientConfiguration.bodyDuplexMode
        : undefined;
    }

    if (!developerToolConfiguration.isServiceEnabled("osubsubscription")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("osubsubscription");
    }

    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(
        requestSigner,
        this._circuitBreaker,
        this._httpOptions,
        this._bodyDuplexMode
      );

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/oalapp/service/onesubs/proxy/20210501";
    if (this.logger) this.logger.info(`RatecardClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Determines whether realm specific endpoint should be used or not.
   * Set realmSpecificEndpointTemplateEnabled to "true" if the user wants to enable use of realm specific endpoint template, otherwise set it to "false"
   * @param realmSpecificEndpointTemplateEnabled flag to enable the use of realm specific endpoint template
   */
  public set useRealmSpecificEndpointTemplate(realmSpecificEndpointTemplateEnabled: boolean) {
    this._realmSpecificEndpointTemplateEnabled = realmSpecificEndpointTemplateEnabled;
    if (this.logger)
      this.logger.info(
        `realmSpecificEndpointTemplateEnabled set to ${this._realmSpecificEndpointTemplateEnabled}`
      );
    if (this._lastSetRegionOrRegionId === common.Region.REGION_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
        RatecardClient.serviceEndpointTemplate,
        this._region,
        RatecardClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        RatecardClient.serviceEndpointTemplate,
        this._regionId,
        RatecardClient.endpointServiceName
      );
    }
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this._region = region;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      RatecardClient.serviceEndpointTemplate,
      region,
      RatecardClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_STRING;
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this._regionId = regionId;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      RatecardClient.serviceEndpointTemplate,
      regionId,
      RatecardClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Shutdown the circuit breaker used by the client when it is no longer needed
   */
  public shutdownCircuitBreaker() {
    if (this._circuitBreaker) {
      this._circuitBreaker.shutdown();
    }
  }

  /**
   * List API that returns all ratecards for given Subscription Id and Account ID (if provided) and
   * for a particular date range
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListRateCardsRequest
   * @return ListRateCardsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubsubscription/ListRateCards.ts.html |here} to see how to use ListRateCards API.
   */
  public async listRateCards(
    listRateCardsRequest: requests.ListRateCardsRequest
  ): Promise<responses.ListRateCardsResponse> {
    if (this.logger) this.logger.debug("Calling operation RatecardClient#listRateCards.");
    const operationName = "listRateCards";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "subscriptionId": listRateCardsRequest.subscriptionId,
      "timeFrom": listRateCardsRequest.timeFrom,
      "timeTo": listRateCardsRequest.timeTo,
      "partNumber": listRateCardsRequest.partNumber,
      "limit": listRateCardsRequest.limit,
      "page": listRateCardsRequest.page,
      "sortOrder": listRateCardsRequest.sortOrder,
      "sortBy": listRateCardsRequest.sortBy,
      "compartmentId": listRateCardsRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listRateCardsRequest.opcRequestId,
      "x-one-origin-region": listRateCardsRequest.xOneOriginRegion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listRateCardsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/ratecards",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListRateCardsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.RateCardSummary,
        type: "Array<model.RateCardSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listRateCardsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.RateCardSummary objects
   * contained in responses from the listRateCards operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRateCards(
    request: requests.ListRateCardsRequest
  ): AsyncIterableIterator<model.RateCardSummary> {
    return paginateRecords(request, req => this.listRateCards(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listRateCardsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listRateCards operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRateCardsResponses(
    request: requests.ListRateCardsRequest
  ): AsyncIterableIterator<responses.ListRateCardsResponse> {
    return paginateResponses(request, req => this.listRateCards(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.RateCardSummary objects
   * contained in responses from the listRateCards operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listRateCardsRecordIterator(
    request: requests.ListRateCardsRequest
  ): AsyncIterableIterator<model.RateCardSummary> {
    return paginateRecords(request, req => this.listRateCards(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listRateCards operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listRateCardsResponseIterator(
    request: requests.ListRateCardsRequest
  ): AsyncIterableIterator<responses.ListRateCardsResponse> {
    return paginateResponses(request, req => this.listRateCards(req));
  }
}
export enum SubscriptionApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class SubscriptionClient {
  protected static serviceEndpointTemplate = "https://csaap-e.oracle.com";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "Subscription";
  protected _regionId: string = "";
  protected "_region": common.Region;
  protected _lastSetRegionOrRegionId: string = "";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
      this._bodyDuplexMode = clientConfiguration.bodyDuplexMode
        ? clientConfiguration.bodyDuplexMode
        : undefined;
    }

    if (!developerToolConfiguration.isServiceEnabled("osubsubscription")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("osubsubscription");
    }

    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(
        requestSigner,
        this._circuitBreaker,
        this._httpOptions,
        this._bodyDuplexMode
      );

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/oalapp/service/onesubs/proxy/20210501";
    if (this.logger) this.logger.info(`SubscriptionClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Determines whether realm specific endpoint should be used or not.
   * Set realmSpecificEndpointTemplateEnabled to "true" if the user wants to enable use of realm specific endpoint template, otherwise set it to "false"
   * @param realmSpecificEndpointTemplateEnabled flag to enable the use of realm specific endpoint template
   */
  public set useRealmSpecificEndpointTemplate(realmSpecificEndpointTemplateEnabled: boolean) {
    this._realmSpecificEndpointTemplateEnabled = realmSpecificEndpointTemplateEnabled;
    if (this.logger)
      this.logger.info(
        `realmSpecificEndpointTemplateEnabled set to ${this._realmSpecificEndpointTemplateEnabled}`
      );
    if (this._lastSetRegionOrRegionId === common.Region.REGION_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
        SubscriptionClient.serviceEndpointTemplate,
        this._region,
        SubscriptionClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        SubscriptionClient.serviceEndpointTemplate,
        this._regionId,
        SubscriptionClient.endpointServiceName
      );
    }
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this._region = region;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      SubscriptionClient.serviceEndpointTemplate,
      region,
      SubscriptionClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_STRING;
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this._regionId = regionId;
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      SubscriptionClient.serviceEndpointTemplate,
      regionId,
      SubscriptionClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Shutdown the circuit breaker used by the client when it is no longer needed
   */
  public shutdownCircuitBreaker() {
    if (this._circuitBreaker) {
      this._circuitBreaker.shutdown();
    }
  }

  /**
   * This list API returns all subscriptions for a given plan number or subscription id or buyer email
   * and provides additional parameters to include ratecard and commitment details.
   * This API expects exactly one of the above mentioned parameters as input. If more than one parameters are provided the API will throw
   * a 400 - invalid parameters exception and if no parameters are provided it will throw a 400 - missing parameter exception
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListSubscriptionsRequest
   * @return ListSubscriptionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubsubscription/ListSubscriptions.ts.html |here} to see how to use ListSubscriptions API.
   */
  public async listSubscriptions(
    listSubscriptionsRequest: requests.ListSubscriptionsRequest
  ): Promise<responses.ListSubscriptionsResponse> {
    if (this.logger) this.logger.debug("Calling operation SubscriptionClient#listSubscriptions.");
    const operationName = "listSubscriptions";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listSubscriptionsRequest.compartmentId,
      "planNumber": listSubscriptionsRequest.planNumber,
      "subscriptionId": listSubscriptionsRequest.subscriptionId,
      "buyerEmail": listSubscriptionsRequest.buyerEmail,
      "isCommitInfoRequired": listSubscriptionsRequest.isCommitInfoRequired,
      "limit": listSubscriptionsRequest.limit,
      "page": listSubscriptionsRequest.page,
      "sortOrder": listSubscriptionsRequest.sortOrder,
      "sortBy": listSubscriptionsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listSubscriptionsRequest.opcRequestId,
      "x-one-gateway-subscription-id": listSubscriptionsRequest.xOneGatewaySubscriptionId,
      "x-one-origin-region": listSubscriptionsRequest.xOneOriginRegion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listSubscriptionsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListSubscriptionsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.SubscriptionSummary,
        type: "Array<model.SubscriptionSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listSubscriptionsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.SubscriptionSummary objects
   * contained in responses from the listSubscriptions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSubscriptions(
    request: requests.ListSubscriptionsRequest
  ): AsyncIterableIterator<model.SubscriptionSummary> {
    return paginateRecords(request, req => this.listSubscriptions(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listSubscriptionsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listSubscriptions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllSubscriptionsResponses(
    request: requests.ListSubscriptionsRequest
  ): AsyncIterableIterator<responses.ListSubscriptionsResponse> {
    return paginateResponses(request, req => this.listSubscriptions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.SubscriptionSummary objects
   * contained in responses from the listSubscriptions operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listSubscriptionsRecordIterator(
    request: requests.ListSubscriptionsRequest
  ): AsyncIterableIterator<model.SubscriptionSummary> {
    return paginateRecords(request, req => this.listSubscriptions(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listSubscriptions operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listSubscriptionsResponseIterator(
    request: requests.ListSubscriptionsRequest
  ): AsyncIterableIterator<responses.ListSubscriptionsResponse> {
    return paginateResponses(request, req => this.listSubscriptions(req));
  }
}
