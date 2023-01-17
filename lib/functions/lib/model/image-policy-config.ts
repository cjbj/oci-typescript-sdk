/**
 * Functions Service API
 * API for the Functions service.

 * OpenAPI spec version: 20181201
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
 * Define the image signature verification policy for an application.
 *
 */
export interface ImagePolicyConfig {
  /**
   * Define if image signature verification policy is enabled for the application.
   *
   */
  "isPolicyEnabled": boolean;
  /**
   * A list of KMS key details.
   */
  "keyDetails"?: Array<model.KeyDetails>;
}

export namespace ImagePolicyConfig {
  export function getJsonObj(obj: ImagePolicyConfig): object {
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
  export function getDeserializedJsonObj(obj: ImagePolicyConfig): object {
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
