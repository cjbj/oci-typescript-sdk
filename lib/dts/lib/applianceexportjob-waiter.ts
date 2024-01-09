/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.017
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { ApplianceExportJobClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ApplianceExportJobWaiter {
  public constructor(
    private client: ApplianceExportJobClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forApplianceExportJob till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetApplianceExportJobResponse | null (null in case of 404 response)
   */
  public async forApplianceExportJob(
    request: serviceRequests.GetApplianceExportJobRequest,
    ...targetStates: models.ApplianceExportJob.LifecycleState[]
  ): Promise<serviceResponses.GetApplianceExportJobResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getApplianceExportJob(request),
      response => targetStates.includes(response.applianceExportJob.lifecycleState!),
      targetStates.includes(models.ApplianceExportJob.LifecycleState.Deleted)
    );
  }
}
