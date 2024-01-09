/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Details for the pipeline step run shape configuration. Specify only when a flex shape is selected.
 */
export interface PipelineShapeConfigDetails {
  /**
   * A pipeline step run instance of type VM.Standard.E3.Flex allows the ocpu count to be specified.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpus"?: number;
  /**
   * A pipeline step run instance of type VM.Standard.E3.Flex allows memory to be specified. This specifies the size of the memory in GBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInGBs"?: number;
}

export namespace PipelineShapeConfigDetails {
  export function getJsonObj(obj: PipelineShapeConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PipelineShapeConfigDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
