/**
 * Oracle Content Management API
 * Oracle Content Management is a cloud-based content hub to drive omni-channel content management and accelerate experience delivery
 * OpenAPI spec version: 20190912
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
 * Summary of the OceInstance.
 */
export interface OceInstanceSummary {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Unique GUID identifier that is immutable on creation
   */
  "guid": string;
  /**
   * OceInstance description, can be updated
   */
  "description"?: string;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * OceInstance Name
   */
  "name": string;
  /**
   * Tenancy Identifier
   */
  "tenancyId": string;
  /**
   * IDCS Tenancy Identifier
   */
  "idcsTenancy": string;
  /**
   * Tenancy Name
   */
  "tenancyName": string;
  /**
   * Instance type based on its usage
   */
  "instanceUsageType"?: OceInstanceSummary.InstanceUsageType;
  /**
   * a list of add-on features for the ocm instance
   */
  "addOnFeatures"?: Array<string>;
  /**
   * Object Storage Namespace of tenancy
   */
  "objectStorageNamespace": string;
  /**
   * Admin Email for Notification
   */
  "adminEmail": string;
  /**
   * Upgrade schedule type representing service to be upgraded immediately whenever latest version is released
   * or delay upgrade of the service to previous released version
   *
   */
  "upgradeSchedule"?: string;
  /**
   * Web Application Firewall(WAF) primary domain
   */
  "wafPrimaryDomain"?: string;
  /**
   * Flag indicating whether the instance access is private or public
   */
  "instanceAccessType"?: OceInstanceSummary.InstanceAccessType;
  /**
   * Flag indicating whether the instance license is new cloud or bring your own license
   */
  "instanceLicenseType"?: model.LicenseType;
  /**
   * The time the the OceInstance was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the OceInstance was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the instance lifecycle.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Details of the current state of the instance lifecycle
   */
  "lifecycleDetails"?: model.LifecycleDetails;
  /**
   * disaster recovery paired ragion name
   */
  "drRegion"?: string;
  /**
   * An message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "stateMessage"?: string;
  /**
   * SERVICE data.
   * Example: `{\"service\": {\"IDCS\": \"value\"}}`
   *
   */
  "service"?: { [key: string]: any };
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OceInstanceSummary {
  export enum InstanceUsageType {
    Primary = "PRIMARY",
    Nonprimary = "NONPRIMARY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum InstanceAccessType {
    Public = "PUBLIC",
    Private = "PRIVATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OceInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OceInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
