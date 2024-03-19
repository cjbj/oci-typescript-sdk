/**
 * Application Performance Monitoring Trace Explorer API
 * Use the Application Performance Monitoring Trace Explorer API to query traces and associated spans in Trace Explorer. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
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
 * Definition of the tag metadata.
 *
 */
export interface TagMetadata {
  /**
   * Type associated with the tag key.
   *
   */
  "tagType"?: TagMetadata.TagType;
  /**
   * Unit associated with the tag key.
   *
   */
  "tagUnit"?: TagMetadata.TagUnit;
}

export namespace TagMetadata {
  export enum TagType {
    String = "STRING",
    Numeric = "NUMERIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TagUnit {
    EpochTimeMs = "EPOCH_TIME_MS",
    Bytes = "BYTES",
    Count = "COUNT",
    DurationMs = "DURATION_MS",
    TraceStatus = "TRACE_STATUS",
    Percentage = "PERCENTAGE",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TagMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TagMetadata): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
