/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20230401
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
 * The summary of a domain govenance entity owned by a tenancy.
 */
export interface DomainGovernanceSummary {
  /**
   * The OCID of the domain governance entity.
   */
  "id": string;
  /**
   * The OCID of the tenancy that owns this domain governance entity.
   */
  "ownerId": string;
  /**
   * The OCID of the domain associated with this domain governance entity.
   */
  "domainId": string;
  /**
   * The lifecycle state of the domain governance entity.
   */
  "lifecycleState": string;
  /**
   * Indicates whether governance is enabled for this domain.
   */
  "isGovernanceEnabled": boolean;
  /**
   * Email address to be used to notify the user, and that the ONS subscription will be created with.
   */
  "subscriptionEmail"?: string;
  /**
   * The ONS topic associated with this domain governance entity.
   */
  "onsTopicId": string;
  /**
   * The ONS subscription associated with this domain governance entity.
   */
  "onsSubscriptionId": string;
  /**
   * Date-time when this domain governance was created. An RFC 3339-formatted date and time string.
   */
  "timeCreated"?: Date;
  /**
   * Date-time when this domain governance was last updated. An RFC 3339-formatted date and time string.
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DomainGovernanceSummary {
  export function getJsonObj(obj: DomainGovernanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DomainGovernanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
