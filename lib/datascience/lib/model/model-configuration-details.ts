/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The model configuration details.
 */
export interface ModelConfigurationDetails {
  /**
   * The OCID of the model you want to deploy.
   */
  "modelId": string;
  "instanceConfiguration": model.InstanceConfiguration;
  "scalingPolicy"?: model.FixedSizeScalingPolicy;
  /**
   * The network bandwidth for the model. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bandwidthMbps"?: number;
}

export namespace ModelConfigurationDetails {
  export function getJsonObj(obj: ModelConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceConfiguration": obj.instanceConfiguration
          ? model.InstanceConfiguration.getJsonObj(obj.instanceConfiguration)
          : undefined,
        "scalingPolicy": obj.scalingPolicy
          ? model.ScalingPolicy.getJsonObj(obj.scalingPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ModelConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceConfiguration": obj.instanceConfiguration
          ? model.InstanceConfiguration.getDeserializedJsonObj(obj.instanceConfiguration)
          : undefined,
        "scalingPolicy": obj.scalingPolicy
          ? model.ScalingPolicy.getDeserializedJsonObj(obj.scalingPolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
