/**
 * Visual Builder API
 * Oracle Visual Builder enables developers to quickly build web and mobile applications. With a visual development environment that makes it easy to connect to Oracle data and third-party REST services, developers can build modern, consumer-grade applications in a fraction of the time it would take in other tools.
The Visual Builder Instance Management API allows users to create and manage a Visual Builder instance.

 * OpenAPI spec version: 20210601
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
 * Description of Vb Instance.
 */
export interface VbInstance {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Vb Instance Identifier, can be renamed.
   */
  "displayName": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * The time the the VbInstance was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time the VbInstance was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the vb instance.
   */
  "lifecycleState": VbInstance.LifecycleState;
  /**
   * An message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "stateMessage"?: string;
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
  /**
   * The Vb Instance URL.
   */
  "instanceUrl": string;
  /**
   * The number of Nodes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount": number;
  /**
   * Visual Builder is enabled or not.
   */
  "isVisualBuilderEnabled"?: boolean;
  "customEndpoint"?: model.CustomEndpointDetails;
  /**
   * A list of alternate custom endpoints used for the vb instance URL.
   *
   */
  "alternateCustomEndpoints"?: Array<model.CustomEndpointDetails>;
  /**
   * The entitlement used for billing purposes.
   */
  "consumptionModel"?: VbInstance.ConsumptionModel;
  "idcsInfo"?: model.IdcsInfoDetails;
  /**
   * A list of associated attachments to other services
   *
   */
  "attachments"?: Array<model.AttachmentDetails>;
  /**
   * The NAT gateway IP address for the VB service VCN
   */
  "serviceNatGatewayIp"?: string;
  /**
   * The NAT gateway IP address for the VB management VCN
   */
  "managementNatGatewayIp"?: string;
  /**
   * The Oracle Cloud ID (OCID) of the Visual Builder service VCN
   */
  "serviceVcnId"?: string;
  /**
   * The Oracle Cloud ID (OCID) of the Visual Builder management VCN
   */
  "managementVcnId"?: string;
}

export namespace VbInstance {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ConsumptionModel {
    Ucm = "UCM",
    Gov = "GOV",
    Vb4Saas = "VB4SAAS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VbInstance): object {
    const jsonObj = {
      ...obj,
      ...{
        "customEndpoint": obj.customEndpoint
          ? model.CustomEndpointDetails.getJsonObj(obj.customEndpoint)
          : undefined,
        "alternateCustomEndpoints": obj.alternateCustomEndpoints
          ? obj.alternateCustomEndpoints.map(item => {
              return model.CustomEndpointDetails.getJsonObj(item);
            })
          : undefined,

        "idcsInfo": obj.idcsInfo ? model.IdcsInfoDetails.getJsonObj(obj.idcsInfo) : undefined,
        "attachments": obj.attachments
          ? obj.attachments.map(item => {
              return model.AttachmentDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VbInstance): object {
    const jsonObj = {
      ...obj,
      ...{
        "customEndpoint": obj.customEndpoint
          ? model.CustomEndpointDetails.getDeserializedJsonObj(obj.customEndpoint)
          : undefined,
        "alternateCustomEndpoints": obj.alternateCustomEndpoints
          ? obj.alternateCustomEndpoints.map(item => {
              return model.CustomEndpointDetails.getDeserializedJsonObj(item);
            })
          : undefined,

        "idcsInfo": obj.idcsInfo
          ? model.IdcsInfoDetails.getDeserializedJsonObj(obj.idcsInfo)
          : undefined,
        "attachments": obj.attachments
          ? obj.attachments.map(item => {
              return model.AttachmentDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
