/**
 * Streaming API
 * Use the Streaming API to produce and consume messages, create streams and stream pools, and manage related items. For more information, see [Streaming](/Content/Streaming/Concepts/streamingoverview.htm).
 * OpenAPI spec version: 20180418
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
 * Represents the state of a single partition reservation.
 *
 */
export interface PartitionReservation {
  /**
   * The partition for which the reservation applies.
   */
  "partition"?: string;
  /**
   * The latest offset which has been committed for this partition. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "committedOffset"?: number;
  /**
   * The consumer instance which currently has the partition reserved.
   */
  "reservedInstance"?: string;
  /**
   * A timestamp when the current reservation expires.
   */
  "timeReservedUntil"?: Date;
}

export namespace PartitionReservation {
  export function getJsonObj(obj: PartitionReservation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PartitionReservation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
