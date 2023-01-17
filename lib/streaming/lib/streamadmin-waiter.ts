/**
 * Streaming API
 * Use the Streaming API to produce and consume messages, create streams and stream pools, and manage related items. For more information, see [Streaming](/Content/Streaming/Concepts/streamingoverview.htm).
 * OpenAPI spec version: 20180418
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
import { StreamAdminClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class StreamAdminWaiter {
  public constructor(
    private client: StreamAdminClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forConnectHarness till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetConnectHarnessResponse | null (null in case of 404 response)
   */
  public async forConnectHarness(
    request: serviceRequests.GetConnectHarnessRequest,
    ...targetStates: models.ConnectHarness.LifecycleState[]
  ): Promise<serviceResponses.GetConnectHarnessResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getConnectHarness(request),
      response => targetStates.includes(response.connectHarness.lifecycleState!),
      targetStates.includes(models.ConnectHarness.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forStream till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetStreamResponse | null (null in case of 404 response)
   */
  public async forStream(
    request: serviceRequests.GetStreamRequest,
    ...targetStates: models.Stream.LifecycleState[]
  ): Promise<serviceResponses.GetStreamResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getStream(request),
      response => targetStates.includes(response.stream.lifecycleState!),
      targetStates.includes(models.Stream.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forStreamPool till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetStreamPoolResponse | null (null in case of 404 response)
   */
  public async forStreamPool(
    request: serviceRequests.GetStreamPoolRequest,
    ...targetStates: models.StreamPool.LifecycleState[]
  ): Promise<serviceResponses.GetStreamPoolResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getStreamPool(request),
      response => targetStates.includes(response.streamPool.lifecycleState!),
      targetStates.includes(models.StreamPool.LifecycleState.Deleted)
    );
  }
}
