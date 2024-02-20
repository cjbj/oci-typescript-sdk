/**
 * OneSubscription API Usage Computation
 * OneSubscription API Common set of Subscription Plan Management (SPM) Usage Computation resources

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

export enum ComputedUsageApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class ComputedUsageClient {
  protected static serviceEndpointTemplate = "https://csaap-e.oracle.com";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "ComputedUsage";
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

    if (!developerToolConfiguration.isServiceEnabled("osubusage")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("osubusage");
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
    if (this.logger) this.logger.info(`ComputedUsageClient endpoint set to ${this._endpoint}`);
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
        ComputedUsageClient.serviceEndpointTemplate,
        this._region,
        ComputedUsageClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        ComputedUsageClient.serviceEndpointTemplate,
        this._regionId,
        ComputedUsageClient.endpointServiceName
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
      ComputedUsageClient.serviceEndpointTemplate,
      region,
      ComputedUsageClient.endpointServiceName
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
      ComputedUsageClient.serviceEndpointTemplate,
      regionId,
      ComputedUsageClient.endpointServiceName
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
   * This is an API which returns Computed Usage corresponding to the id passed
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetComputedUsageRequest
   * @return GetComputedUsageResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubusage/GetComputedUsage.ts.html |here} to see how to use GetComputedUsage API.
   */
  public async getComputedUsage(
    getComputedUsageRequest: requests.GetComputedUsageRequest
  ): Promise<responses.GetComputedUsageResponse> {
    if (this.logger) this.logger.debug("Calling operation ComputedUsageClient#getComputedUsage.");
    const operationName = "getComputedUsage";
    const apiReferenceLink = "";
    const pathParams = {
      "{computedUsageId}": getComputedUsageRequest.computedUsageId
    };

    const queryParams = {
      "compartmentId": getComputedUsageRequest.compartmentId,
      "fields": getComputedUsageRequest.fields
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getComputedUsageRequest.opcRequestId,
      "x-one-origin-region": getComputedUsageRequest.xOneOriginRegion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getComputedUsageRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/computedUsages/{computedUsageId}",
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
        responseObject: <responses.GetComputedUsageResponse>{},
        body: await response.json(),
        bodyKey: "computedUsage",
        bodyModel: model.ComputedUsage,
        type: "model.ComputedUsage",
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
   * This is a collection API which returns a list of aggregated computed usage details (there can be multiple Parent Products under a given SubID each of which is represented under Subscription Service Line # in SPM).
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListComputedUsageAggregatedsRequest
   * @return ListComputedUsageAggregatedsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubusage/ListComputedUsageAggregateds.ts.html |here} to see how to use ListComputedUsageAggregateds API.
   */
  public async listComputedUsageAggregateds(
    listComputedUsageAggregatedsRequest: requests.ListComputedUsageAggregatedsRequest
  ): Promise<responses.ListComputedUsageAggregatedsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation ComputedUsageClient#listComputedUsageAggregateds.");
    const operationName = "listComputedUsageAggregateds";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listComputedUsageAggregatedsRequest.compartmentId,
      "subscriptionId": listComputedUsageAggregatedsRequest.subscriptionId,
      "timeFrom": listComputedUsageAggregatedsRequest.timeFrom,
      "timeTo": listComputedUsageAggregatedsRequest.timeTo,
      "parentProduct": listComputedUsageAggregatedsRequest.parentProduct,
      "grouping": listComputedUsageAggregatedsRequest.grouping,
      "limit": listComputedUsageAggregatedsRequest.limit,
      "page": listComputedUsageAggregatedsRequest.page
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listComputedUsageAggregatedsRequest.opcRequestId,
      "x-one-origin-region": listComputedUsageAggregatedsRequest.xOneOriginRegion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listComputedUsageAggregatedsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/computedUsages/aggregated",
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
        responseObject: <responses.ListComputedUsageAggregatedsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.ComputedUsageAggregatedSummary,
        type: "Array<model.ComputedUsageAggregatedSummary>",
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
   * NOTE: This function is deprecated in favor of listComputedUsageAggregatedsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.ComputedUsageAggregatedSummary objects
   * contained in responses from the listComputedUsageAggregateds operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllComputedUsageAggregateds(
    request: requests.ListComputedUsageAggregatedsRequest
  ): AsyncIterableIterator<model.ComputedUsageAggregatedSummary> {
    return paginateRecords(request, req => this.listComputedUsageAggregateds(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listComputedUsageAggregatedsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listComputedUsageAggregateds operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllComputedUsageAggregatedsResponses(
    request: requests.ListComputedUsageAggregatedsRequest
  ): AsyncIterableIterator<responses.ListComputedUsageAggregatedsResponse> {
    return paginateResponses(request, req => this.listComputedUsageAggregateds(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.ComputedUsageAggregatedSummary objects
   * contained in responses from the listComputedUsageAggregateds operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listComputedUsageAggregatedsRecordIterator(
    request: requests.ListComputedUsageAggregatedsRequest
  ): AsyncIterableIterator<model.ComputedUsageAggregatedSummary> {
    return paginateRecords(request, req => this.listComputedUsageAggregateds(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listComputedUsageAggregateds operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listComputedUsageAggregatedsResponseIterator(
    request: requests.ListComputedUsageAggregatedsRequest
  ): AsyncIterableIterator<responses.ListComputedUsageAggregatedsResponse> {
    return paginateResponses(request, req => this.listComputedUsageAggregateds(req));
  }

  /**
   * This is a collection API which returns a list of Computed Usages for given filters.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListComputedUsagesRequest
   * @return ListComputedUsagesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubusage/ListComputedUsages.ts.html |here} to see how to use ListComputedUsages API.
   */
  public async listComputedUsages(
    listComputedUsagesRequest: requests.ListComputedUsagesRequest
  ): Promise<responses.ListComputedUsagesResponse> {
    if (this.logger) this.logger.debug("Calling operation ComputedUsageClient#listComputedUsages.");
    const operationName = "listComputedUsages";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listComputedUsagesRequest.compartmentId,
      "subscriptionId": listComputedUsagesRequest.subscriptionId,
      "timeFrom": listComputedUsagesRequest.timeFrom,
      "timeTo": listComputedUsagesRequest.timeTo,
      "parentProduct": listComputedUsagesRequest.parentProduct,
      "computedProduct": listComputedUsagesRequest.computedProduct,
      "limit": listComputedUsagesRequest.limit,
      "page": listComputedUsagesRequest.page,
      "sortOrder": listComputedUsagesRequest.sortOrder,
      "sortBy": listComputedUsagesRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listComputedUsagesRequest.opcRequestId,
      "x-one-origin-region": listComputedUsagesRequest.xOneOriginRegion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listComputedUsagesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/computedUsages",
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
        responseObject: <responses.ListComputedUsagesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.ComputedUsageSummary,
        type: "Array<model.ComputedUsageSummary>",
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
   * NOTE: This function is deprecated in favor of listComputedUsagesRecordIterator function.
   * Creates a new async iterator which will iterate over the models.ComputedUsageSummary objects
   * contained in responses from the listComputedUsages operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllComputedUsages(
    request: requests.ListComputedUsagesRequest
  ): AsyncIterableIterator<model.ComputedUsageSummary> {
    return paginateRecords(request, req => this.listComputedUsages(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listComputedUsagesResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listComputedUsages operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllComputedUsagesResponses(
    request: requests.ListComputedUsagesRequest
  ): AsyncIterableIterator<responses.ListComputedUsagesResponse> {
    return paginateResponses(request, req => this.listComputedUsages(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.ComputedUsageSummary objects
   * contained in responses from the listComputedUsages operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listComputedUsagesRecordIterator(
    request: requests.ListComputedUsagesRequest
  ): AsyncIterableIterator<model.ComputedUsageSummary> {
    return paginateRecords(request, req => this.listComputedUsages(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listComputedUsages operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listComputedUsagesResponseIterator(
    request: requests.ListComputedUsagesRequest
  ): AsyncIterableIterator<responses.ListComputedUsagesResponse> {
    return paginateResponses(request, req => this.listComputedUsages(req));
  }
}
