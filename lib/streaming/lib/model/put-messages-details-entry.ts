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

import * as model from "../model";
import common = require("oci-common");

/**
 * Object that represents a message to emit to a stream.
 */
export interface PutMessagesDetailsEntry {
  /**
   * The key of the message, expressed as a byte array up to 256 bytes in size. Messages with the same key are stored in the same partition.
   *
   */
  "key"?: string;
  /**
   * The message, expressed as a byte array up to 1 MiB in size.
   */
  "value": string;
}

export namespace PutMessagesDetailsEntry {
  export function getJsonObj(obj: PutMessagesDetailsEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PutMessagesDetailsEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
