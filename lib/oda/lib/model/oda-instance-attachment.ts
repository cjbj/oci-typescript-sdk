/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Description of an ODA instance attachment.
 */
export interface OdaInstanceAttachment {
  /**
   * Unique immutable identifier that was assigned when the ODA instance attachment was created.
   */
  "id": string;
  /**
   * The OCID of the ODA instance to which the attachment applies.
   */
  "instanceId": string;
  /**
   * The OCID of the target instance (which could be any other OCI PaaS/SaaS resource), to which the ODA instance is or is being attached.
   */
  "attachToId": string;
  /**
   * The type of attachment defined as an enum.
   */
  "attachmentType": OdaInstanceAttachment.AttachmentType;
  /**
   * Attachment-specific metadata, defined by the target service.
   */
  "attachmentMetadata"?: string;
  /**
   * List of operation names that are restricted while this ODA instance is attached.
   */
  "restrictedOperations"?: Array<string>;
  "owner"?: model.OdaInstanceOwner;
  /**
   * The time the attachment was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the attachment was last modified. An RFC3339 formatted datetime string
   */
  "timeLastUpdate"?: Date;
  /**
   * The current state of the attachment.
   */
  "lifecycleState": OdaInstanceAttachment.LifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OdaInstanceAttachment {
  export enum AttachmentType {
    Fusion = "FUSION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Attaching = "ATTACHING",
    Active = "ACTIVE",
    Detaching = "DETACHING",
    Inactive = "INACTIVE",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OdaInstanceAttachment): object {
    const jsonObj = {
      ...obj,
      ...{
        "owner": obj.owner ? model.OdaInstanceOwner.getJsonObj(obj.owner) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OdaInstanceAttachment): object {
    const jsonObj = {
      ...obj,
      ...{
        "owner": obj.owner ? model.OdaInstanceOwner.getDeserializedJsonObj(obj.owner) : undefined
      }
    };

    return jsonObj;
  }
}
