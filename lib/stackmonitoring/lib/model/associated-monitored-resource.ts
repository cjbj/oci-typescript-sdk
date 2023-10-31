/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The information about monitored resource.
 */
export interface AssociatedMonitoredResource {
  /**
   * Monitored resource identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "id": string;
  /**
   * Monitored Resource Name.
   *
   */
  "name"?: string;
  /**
   * Monitored resource display name.
   */
  "displayName"?: string;
  /**
   * Monitored Resource Type.
   *
   */
  "type"?: string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "compartmentId"?: string;
  /**
   * Monitored Resource Host Name.
   *
   */
  "hostName"?: string;
  /**
   * External resource is any OCI resource identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   * which is not a Stack Monitoring service resource.
   * Currently supports only following resource types - Container database, non-container database,
   * pluggable database and OCI compute instance.
   *
   */
  "externalId"?: string;
  /**
   * Management Agent Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "managementAgentId"?: string;
  /**
   * The current state of the monitored resource.
   */
  "lifecycleState"?: model.ResourceLifecycleState;
  /**
   * License edition of the monitored resource.
   */
  "license"?: model.LicenseType;
  /**
   * Association details of the resource.
   *
   */
  "association"?: any;
}

export namespace AssociatedMonitoredResource {
  export function getJsonObj(obj: AssociatedMonitoredResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssociatedMonitoredResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
