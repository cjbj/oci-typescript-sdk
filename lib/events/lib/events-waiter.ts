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

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { EventsClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class EventsWaiter {
  public constructor(private client: EventsClient, private readonly config?: WaiterConfiguration) {}

  /**
   * Waits forRule till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRuleResponse | null (null in case of 404 response)
   */
  public async forRule(
    request: serviceRequests.GetRuleRequest,
    ...targetStates: models.Rule.LifecycleState[]
  ): Promise<serviceResponses.GetRuleResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRule(request),
      response => targetStates.includes(response.rule.lifecycleState!),
      targetStates.includes(models.Rule.LifecycleState.Deleted)
    );
  }
}
