/**
 * Events API
 * API for the Events Service. Use this API to manage rules and actions that create automation 
in your tenancy. For more information, see [Overview of Events](/iaas/Content/Events/Concepts/eventsoverview.htm).

 * OpenAPI spec version: 20181201
 * 
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
import { EventsWaiter } from "./events-waiter";
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

export enum EventsApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class EventsClient {
  protected static serviceEndpointTemplate = "https://events.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_realmSpecificEndpointTemplateEnabled": boolean | undefined = undefined;
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_waiters": EventsWaiter;
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker: typeof Breaker | null = null;
  protected _httpOptions: any = undefined;
  protected _bodyDuplexMode: any = undefined;
  public targetService = "Events";
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

    if (!developerToolConfiguration.isServiceEnabled("events")) {
      let errmsg =
        "The developerToolConfiguration configuration disabled this service, this behavior is controlled by developerToolConfiguration.ociEnabledServiceSet variable. Please check if your local developer_tool_configuration file has configured the service you're targeting or contact the cloud provider on the availability of this service : ";
      throw errmsg.concat("events");
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
    this._endpoint = this._endpoint + "/20181201";
    if (this.logger) this.logger.info(`EventsClient endpoint set to ${this._endpoint}`);
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
        EventsClient.serviceEndpointTemplate,
        this._region,
        EventsClient.endpointServiceName
      );
    } else if (this._lastSetRegionOrRegionId === common.Region.REGION_ID_STRING) {
      this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
        EventsClient.serviceEndpointTemplate,
        this._regionId,
        EventsClient.endpointServiceName
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
      EventsClient.serviceEndpointTemplate,
      region,
      EventsClient.endpointServiceName
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
      EventsClient.serviceEndpointTemplate,
      regionId,
      EventsClient.endpointServiceName
    );
    this._lastSetRegionOrRegionId = common.Region.REGION_ID_STRING;
  }

  /**
   * Creates a new EventsWaiter for resources for this service.
   *
   * @param config The waiter configuration for termination and delay strategy
   * @return The service waiters.
   */
  public createWaiters(config?: common.WaiterConfiguration): EventsWaiter {
    this._waiters = new EventsWaiter(this, config);
    return this._waiters;
  }

  /**
   * Gets the waiters available for resources for this service.
   *
   * @return The service waiters.
   */
  public getWaiters(): EventsWaiter {
    if (this._waiters) {
      return this._waiters;
    }
    throw Error("Waiters do not exist. Please create waiters.");
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
   * Moves a rule into a different compartment within the same tenancy. For information about moving
   * resources between compartments, see [Moving Resources to a Different Compartment](https://docs.cloud.oracle.com/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ChangeRuleCompartmentRequest
   * @return ChangeRuleCompartmentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/events/ChangeRuleCompartment.ts.html |here} to see how to use ChangeRuleCompartment API.
   */
  public async changeRuleCompartment(
    changeRuleCompartmentRequest: requests.ChangeRuleCompartmentRequest
  ): Promise<responses.ChangeRuleCompartmentResponse> {
    if (this.logger) this.logger.debug("Calling operation EventsClient#changeRuleCompartment.");
    const operationName = "changeRuleCompartment";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/events/20181201/Rule/ChangeRuleCompartment";
    const pathParams = {
      "{ruleId}": changeRuleCompartmentRequest.ruleId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": changeRuleCompartmentRequest.ifMatch,
      "opc-request-id": changeRuleCompartmentRequest.opcRequestId,
      "opc-retry-token": changeRuleCompartmentRequest.opcRetryToken
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      changeRuleCompartmentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules/{ruleId}/actions/changeCompartment",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        changeRuleCompartmentRequest.changeRuleCompartmentDetails,
        "ChangeRuleCompartmentDetails",
        model.ChangeRuleCompartmentDetails.getJsonObj
      ),
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
        responseObject: <responses.ChangeRuleCompartmentResponse>{},
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
   * Creates a new rule.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateRuleRequest
   * @return CreateRuleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/events/CreateRule.ts.html |here} to see how to use CreateRule API.
   */
  public async createRule(
    createRuleRequest: requests.CreateRuleRequest
  ): Promise<responses.CreateRuleResponse> {
    if (this.logger) this.logger.debug("Calling operation EventsClient#createRule.");
    const operationName = "createRule";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/events/20181201/Rule/CreateRule";
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createRuleRequest.opcRetryToken,
      "opc-request-id": createRuleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createRuleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createRuleRequest.createRuleDetails,
        "CreateRuleDetails",
        model.CreateRuleDetails.getJsonObj
      ),
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
        responseObject: <responses.CreateRuleResponse>{},
        body: await response.json(),
        bodyKey: "rule",
        bodyModel: model.Rule,
        type: "model.Rule",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Deletes a rule.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param DeleteRuleRequest
   * @return DeleteRuleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/events/DeleteRule.ts.html |here} to see how to use DeleteRule API.
   */
  public async deleteRule(
    deleteRuleRequest: requests.DeleteRuleRequest
  ): Promise<responses.DeleteRuleResponse> {
    if (this.logger) this.logger.debug("Calling operation EventsClient#deleteRule.");
    const operationName = "deleteRule";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/events/20181201/Rule/DeleteRule";
    const pathParams = {
      "{ruleId}": deleteRuleRequest.ruleId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteRuleRequest.ifMatch,
      "opc-request-id": deleteRuleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteRuleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules/{ruleId}",
      method: "DELETE",
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
        responseObject: <responses.DeleteRuleResponse>{},
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
   * Retrieves a rule.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetRuleRequest
   * @return GetRuleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/events/GetRule.ts.html |here} to see how to use GetRule API.
   */
  public async getRule(
    getRuleRequest: requests.GetRuleRequest
  ): Promise<responses.GetRuleResponse> {
    if (this.logger) this.logger.debug("Calling operation EventsClient#getRule.");
    const operationName = "getRule";
    const apiReferenceLink = "https://docs.oracle.com/iaas/api/#/en/events/20181201/Rule/GetRule";
    const pathParams = {
      "{ruleId}": getRuleRequest.ruleId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getRuleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getRuleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules/{ruleId}",
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
        responseObject: <responses.GetRuleResponse>{},
        body: await response.json(),
        bodyKey: "rule",
        bodyModel: model.Rule,
        type: "model.Rule",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Lists rules for this compartment.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListRulesRequest
   * @return ListRulesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/events/ListRules.ts.html |here} to see how to use ListRules API.
   */
  public async listRules(
    listRulesRequest: requests.ListRulesRequest
  ): Promise<responses.ListRulesResponse> {
    if (this.logger) this.logger.debug("Calling operation EventsClient#listRules.");
    const operationName = "listRules";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/events/20181201/RuleSummary/ListRules";
    const pathParams = {};

    const queryParams = {
      "compartmentId": listRulesRequest.compartmentId,
      "limit": listRulesRequest.limit,
      "page": listRulesRequest.page,
      "lifecycleState": listRulesRequest.lifecycleState,
      "displayName": listRulesRequest.displayName,
      "sortBy": listRulesRequest.sortBy,
      "sortOrder": listRulesRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listRulesRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listRulesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules",
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
        responseObject: <responses.ListRulesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.RuleSummary,
        type: "Array<model.RuleSummary>",
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
   * NOTE: This function is deprecated in favor of listRulesRecordIterator function.
   * Creates a new async iterator which will iterate over the models.RuleSummary objects
   * contained in responses from the listRules operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRules(
    request: requests.ListRulesRequest
  ): AsyncIterableIterator<model.RuleSummary> {
    return paginateRecords(request, req => this.listRules(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listRulesResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listRules operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllRulesResponses(
    request: requests.ListRulesRequest
  ): AsyncIterableIterator<responses.ListRulesResponse> {
    return paginateResponses(request, req => this.listRules(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.RuleSummary objects
   * contained in responses from the listRules operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listRulesRecordIterator(
    request: requests.ListRulesRequest
  ): AsyncIterableIterator<model.RuleSummary> {
    return paginateRecords(request, req => this.listRules(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listRules operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listRulesResponseIterator(
    request: requests.ListRulesRequest
  ): AsyncIterableIterator<responses.ListRulesResponse> {
    return paginateResponses(request, req => this.listRules(req));
  }

  /**
   * Updates a rule.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param UpdateRuleRequest
   * @return UpdateRuleResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/events/UpdateRule.ts.html |here} to see how to use UpdateRule API.
   */
  public async updateRule(
    updateRuleRequest: requests.UpdateRuleRequest
  ): Promise<responses.UpdateRuleResponse> {
    if (this.logger) this.logger.debug("Calling operation EventsClient#updateRule.");
    const operationName = "updateRule";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/events/20181201/Rule/UpdateRule";
    const pathParams = {
      "{ruleId}": updateRuleRequest.ruleId
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateRuleRequest.ifMatch,
      "opc-request-id": updateRuleRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateRuleRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/rules/{ruleId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateRuleRequest.updateRuleDetails,
        "UpdateRuleDetails",
        model.UpdateRuleDetails.getJsonObj
      ),
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
        responseObject: <responses.UpdateRuleResponse>{},
        body: await response.json(),
        bodyKey: "rule",
        bodyModel: model.Rule,
        type: "model.Rule",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
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
}
