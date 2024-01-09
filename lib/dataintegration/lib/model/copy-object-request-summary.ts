/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Copy metadata object response summary.
 */
export interface CopyObjectRequestSummary {
  /**
   * Copy object request key.
   */
  "key"?: string;
  /**
   * The workspace id of the source from where we need to copy object.
   */
  "sourceWorkspaceId"?: string;
  /**
   * The list of the objects to be copied.
   */
  "objectKeys"?: Array<string>;
  "copyConflictResolution"?: model.CopyConflictResolution;
  /**
   * Copy Object request status.
   */
  "copyMetadataObjectRequestStatus"?: CopyObjectRequestSummary.CopyMetadataObjectRequestStatus;
  /**
   * OCID of the user who initiated copy request.
   */
  "createdBy"?: string;
  /**
   * Name of the user who created the copy object request.
   */
  "createdByName"?: string;
  /**
   * Number of source objects to be copied. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSourceObjectCount"?: number;
  /**
   * Number of objects copied into the target. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalObjectsCopiedIntoTarget"?: number;
  /**
   * Time at which the request started getting processed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeStartedInMillis"?: number;
  /**
   * Time at which the request was completely processed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeEndedInMillis"?: number;
  /**
   * The array of copy object details.
   */
  "copiedItems"?: Array<model.CopyObjectMetadataSummary>;
  /**
   * The array of copied referenced objects.
   */
  "referencedItems"?: Array<model.CopyObjectMetadataSummary>;
  /**
   * Name of the copy object request.
   */
  "name"?: string;
}

export namespace CopyObjectRequestSummary {
  export enum CopyMetadataObjectRequestStatus {
    Successful = "SUCCESSFUL",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    Queued = "QUEUED",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CopyObjectRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "copyConflictResolution": obj.copyConflictResolution
          ? model.CopyConflictResolution.getJsonObj(obj.copyConflictResolution)
          : undefined,

        "copiedItems": obj.copiedItems
          ? obj.copiedItems.map(item => {
              return model.CopyObjectMetadataSummary.getJsonObj(item);
            })
          : undefined,
        "referencedItems": obj.referencedItems
          ? obj.referencedItems.map(item => {
              return model.CopyObjectMetadataSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CopyObjectRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "copyConflictResolution": obj.copyConflictResolution
          ? model.CopyConflictResolution.getDeserializedJsonObj(obj.copyConflictResolution)
          : undefined,

        "copiedItems": obj.copiedItems
          ? obj.copiedItems.map(item => {
              return model.CopyObjectMetadataSummary.getDeserializedJsonObj(item);
            })
          : undefined,
        "referencedItems": obj.referencedItems
          ? obj.referencedItems.map(item => {
              return model.CopyObjectMetadataSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
