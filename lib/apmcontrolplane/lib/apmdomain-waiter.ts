/**
 * Application Performance Monitoring Control Plane API
 * Use the Application Performance Monitoring Control Plane API to perform operations such as creating, updating,
deleting and listing APM domains and monitoring the progress of these operations using the work request APIs. For more information, see [Application Performance Monitoring](/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { ApmDomainClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ApmDomainWaiter {
  public constructor(
    private client: ApmDomainClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forApmDomain till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetApmDomainResponse | null (null in case of 404 response)
   */
  public async forApmDomain(
    request: serviceRequests.GetApmDomainRequest,
    ...targetStates: models.LifecycleStates[]
  ): Promise<serviceResponses.GetApmDomainResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getApmDomain(request),
      response => targetStates.includes(response.apmDomain.lifecycleState!),
      targetStates.includes(models.LifecycleStates.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
