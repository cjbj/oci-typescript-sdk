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
 * Object used to create a cursor to consume messages in a stream.
 */
export interface CreateCursorDetails {
  /**
   * The partition to get messages from.
   */
  "partition": string;
  /**
    * The type of cursor, which determines the starting point from which the stream will be consumed:
* <p>
- `AFTER_OFFSET:` The partition position immediately following the offset you specify. (Offsets are assigned when you successfully append a message to a partition in a stream.)
* - `AT_OFFSET:` The exact partition position indicated by the offset you specify.
* - `AT_TIME:` A specific point in time.
* - `LATEST:` The most recent message in the partition that was added after the cursor was created.
* - `TRIM_HORIZON:` The oldest message in the partition that is within the retention period window.
* 
    */
  "type": CreateCursorDetails.Type;
  /**
   * The offset to consume from if the cursor type is `AT_OFFSET` or `AFTER_OFFSET`. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "offset"?: number;
  /**
   * The time to consume from if the cursor type is `AT_TIME`, expressed in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) timestamp format.
   *
   */
  "time"?: Date;
}

export namespace CreateCursorDetails {
  export enum Type {
    AfterOffset = "AFTER_OFFSET",
    AtOffset = "AT_OFFSET",
    AtTime = "AT_TIME",
    Latest = "LATEST",
    TrimHorizon = "TRIM_HORIZON"
  }

  export function getJsonObj(obj: CreateCursorDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCursorDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
