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
 * Metadata for a Digital Assistant Parameter.
 */
export interface DigitalAssistantParameter {
  /**
   * The Parameter name.  This must be unique within the parent resource.
   */
  "name": string;
  /**
   * The display name for the Parameter.
   */
  "displayName": string;
  /**
   * A description of the Parameter.
   */
  "description"?: string;
  /**
   * The value type.
   */
  "type": model.ParameterType;
  /**
   * The current value.  The value will be interpreted based on the `type`.
   */
  "value": string;
  /**
   * The Parameter's current state.
   */
  "lifecycleState": model.LifecycleState;
}

export namespace DigitalAssistantParameter {
  export function getJsonObj(obj: DigitalAssistantParameter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DigitalAssistantParameter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
