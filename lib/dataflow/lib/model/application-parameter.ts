/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * The parameter of an application.
 *
 */
export interface ApplicationParameter {
  /**
   * The name of the parameter.  It must be a string of one or more word characters
   * (a-z, A-Z, 0-9, _).
   * Examples: \"iterations\", \"input_file\"
   *
   */
  "name": string;
  /**
   * The value of the parameter. It must be a string of 0 or more characters of any kind.
   * Examples: \"\" (empty string), \"10\", \"mydata.xml\", \"${x}\"
   *
   */
  "value": string;
}

export namespace ApplicationParameter {
  export function getJsonObj(obj: ApplicationParameter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ApplicationParameter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
