/**
 * Organizations API
 * The Organizations API allows you to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and its resources.
 * OpenAPI spec version: 20200801
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
 * The invitation model that the recipient owns.
 */
export interface RecipientInvitation {
  /**
   * OCID of the recipient invitation.
   */
  "id": string;
  /**
   * OCID of the recipient tenancy.
   */
  "compartmentId": string;
  /**
   * OCID of the corresponding sender invitation.
   */
  "senderInvitationId": string;
  /**
   * OCID of the sender tenancy.
   */
  "senderTenancyId": string;
  /**
   * Lifecycle state of the recipient invitation.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * Status of the recipient invitation.
   */
  "status": model.RecipientInvitationStatus;
  /**
   * A user-created name to describe the invitation. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Date-time when this recipient invitation was created.
   */
  "timeCreated": Date;
  /**
   * Date-time when this recipient invitation was last updated.
   */
  "timeUpdated"?: Date;
  /**
   * Email address of the recipient.
   */
  "recipientEmailAddress"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
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

export namespace RecipientInvitation {
  export function getJsonObj(obj: RecipientInvitation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecipientInvitation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
