/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * Impacted Resource summary Definition.
 */
export interface ImpactedResourceSummary {
  /**
   * Unique identifier for finding event
   */
  "id": string;
  /**
   * Unique id of the Impacted Resource
   */
  "resourceId": string;
  /**
   * Problem Id to which the Impacted Resource is associated
   */
  "problemId": string;
  /**
   * Compartment Id where the resource is created
   */
  "compartmentId": string;
  /**
   * Identifier for the sighting type
   */
  "sightingType"?: string;
  /**
   * Name of the sighting type
   */
  "sightingTypeDisplayName"?: string;
  /**
   * Name of the Impacted Resource
   */
  "resourceName": string;
  /**
   * Type of the Impacted Resource
   */
  "resourceType": string;
  /**
   * Region where the resource is created
   */
  "region": string;
  /**
   * Time when the problem was identified
   */
  "timeIdentified": Date;
}

export namespace ImpactedResourceSummary {
  export function getJsonObj(obj: ImpactedResourceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImpactedResourceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
