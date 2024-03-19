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
 * Response of an individual attribute item in the bulk activate or deactivate operation.
 *
 */
export interface AttributeResponse {
  /**
   * Attribute that was activated or deactivated by this bulk operation.
   *
   */
  "attributeName": string;
  /**
   * Type of the attribute.
   *
   */
  "attributeType": AttributeResponse.AttributeType;
  /**
   * Unit of the attribute.
   *
   */
  "unit"?: AttributeResponse.Unit;
  /**
   * Notes for the activated attribute.
   *
   */
  "notes"?: string;
  /**
   * Type of operation - activate or deactivate.
   *
   */
  "operationType": AttributeResponse.OperationType;
  /**
   * Namespace of the attribute whose properties were updated.  The attributeNamespace will default to TRACES if it is
   * not passed in.
   *
   */
  "attributeNameSpace": AttributeResponse.AttributeNameSpace;
  /**
   * Status of the attribute after this operation.  The attribute can have one of the following statuses after the activate or deactivate operation.  The attribute
   * can have either a success status or an error status.  The status of the attribute must be correlated with the operation status property in the bulk operation metadata
   * object.  The bulk operation will be successful only when all attributes in the bulk request are processed successful and they get a success status back.
   * The following are successful status values of individual attribute items in a bulk attribute activation operation.
   * ATTRIBUTE_ACTIVATED - The attribute is activated and is available to be queried.  Note that ingest might still have not picked up the changes, and the
   * associated caches would not have refreshed yet to pick up the changes.
   * ATTRIBUTE_ALREADY_ACTIVE - The caller is trying to activate an attribute that is already active or in the process of getting activated.
   * ATTRIBUTE_DEACTIVATED - The attribute is deactivated and will not appear in searches.  Ingest might not have picked up the new changes and the associated caches
   * might not have refreshed yet.
   * ATTRIBUTE_ALREADY_DEACTIVATED - The caller is trying to deactivate an attribute that has already been deactivated or in the process of deactivation.
   * DUPLICATE_ATTRIBUTE - The attribute is a duplicate of an attribute that was present in this bulk request.  Note that we deduplicate the attribute collection, process only unique attributes,
   * and call out duplicates.  A duplicate attribute in a bulk request will not prevent the processing of further attributes in the bulk operation.
   * The following values are error statuses and the bulk processing is stopped when the first error is encountered.  None of the attributes in the bulk request would have been activated or
   * deactivated by this bulk operation.
   * DEACTIVATION_NOT_ALLOWED - The caller has asked for the deactivation of an out of box tag which is not permitted.
   * ATTRIBUTE_DOES_NOT_EXIST - The caller tries to deactivate an attribute that doesn't exist in the APM Domain.
   * INVALID_ATTRIBUTE - The attribute is invalid.
   * INVALID_ATTRIBUTE_TYPE_CONFLICT - The attribute is invalid.  There were two attributes with same name but different type in the bulk request.
   * ATTRIBUTE_NOT_PROCESSED - The attribute was not processed, as there was another attribute in this bulk request collection that resulted in a processing error.
   * ATTRIBUTE_UPDATE_NOT_ALLOWED - The unit of the attribute cannot be updated as it is an in-built system attribute.
   *
   */
  "attributeStatus": AttributeResponse.AttributeStatus;
  /**
   * Time when the attribute was activated or deactivated.  Note that ingest might not have picked up the changes even if this time has elapsed.
   *
   */
  "timeUpdated": Date;
}

export namespace AttributeResponse {
  export enum AttributeType {
    Numeric = "NUMERIC",
    String = "STRING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Unit {
    None = "NONE",
    EpochTimeMs = "EPOCH_TIME_MS",
    Bytes = "BYTES",
    Count = "COUNT",
    DurationMs = "DURATION_MS",
    TraceStatus = "TRACE_STATUS",
    Percentage = "PERCENTAGE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OperationType {
    Activate = "ACTIVATE",
    Deactivate = "DEACTIVATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AttributeNameSpace {
    Traces = "TRACES",
    Synthetic = "SYNTHETIC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AttributeStatus {
    AttributeAlreadyActive = "ATTRIBUTE_ALREADY_ACTIVE",
    AttributeActivated = "ATTRIBUTE_ACTIVATED",
    AttributeDeactivated = "ATTRIBUTE_DEACTIVATED",
    DeactivationNotAllowed = "DEACTIVATION_NOT_ALLOWED",
    AttributeDoesNotExist = "ATTRIBUTE_DOES_NOT_EXIST",
    AttributeAlreadyDeactivated = "ATTRIBUTE_ALREADY_DEACTIVATED",
    DuplicateAttribute = "DUPLICATE_ATTRIBUTE",
    InvalidAttribute = "INVALID_ATTRIBUTE",
    InvalidAttributeTypeConflict = "INVALID_ATTRIBUTE_TYPE_CONFLICT",
    AttributeNotProcessed = "ATTRIBUTE_NOT_PROCESSED",
    AttributeUpdateNotAllowed = "ATTRIBUTE_UPDATE_NOT_ALLOWED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AttributeResponse): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AttributeResponse): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
