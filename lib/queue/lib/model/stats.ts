/**
 * Queue API
 * Use the Queue API to produce and consume messages, create queues, and manage related items. For more information, see [Queue](/iaas/Content/queue/overview.htm).
 * OpenAPI spec version: 20210201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The stats for a queue or a dead letter queue.
 */
export interface Stats {
  /**
   * The approximate number of visible messages (available for delivery) currently in the queue. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "visibleMessages": number;
  /**
   * The approximate number of messages delivered to a consumer but not yet deleted and so unavailable for re-delivery. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inFlightMessages": number;
  /**
   * The approximate size of the queue in bytes. Sum of the size of visible and in-flight messages. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInBytes": number;
}

export namespace Stats {
  export function getJsonObj(obj: Stats): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Stats): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
