/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The properties that define a image verification policy.
 */
export interface UpdateImagePolicyConfigDetails {
  /**
   * Whether the image verification policy is enabled. Defaults to false. If set to true, the images will be verified against the policy at runtime.
   */
  "isPolicyEnabled"?: boolean;
  /**
   * A list of KMS key details.
   */
  "keyDetails"?: Array<model.KeyDetails>;
}

export namespace UpdateImagePolicyConfigDetails {
  export function getJsonObj(obj: UpdateImagePolicyConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyDetails": obj.keyDetails
          ? obj.keyDetails.map(item => {
              return model.KeyDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateImagePolicyConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyDetails": obj.keyDetails
          ? obj.keyDetails.map(item => {
              return model.KeyDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
