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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Options for creating or updating node pools.
 */
export interface NodePoolOptions {
  /**
   * Available Kubernetes versions.
   */
  "kubernetesVersions"?: Array<string>;
  /**
   * Available shapes for nodes.
   */
  "shapes"?: Array<string>;
  /**
   * Deprecated. See sources.
   * When creating a node pool using the `CreateNodePoolDetails` object, only image names contained in this
   * property can be passed to the `nodeImageName` property.
   *
   */
  "images"?: Array<string>;
  /**
   * Available source of the node.
   */
  "sources"?: Array<model.NodeSourceOption>;
}

export namespace NodePoolOptions {
  export function getJsonObj(obj: NodePoolOptions): object {
    const jsonObj = {
      ...obj,
      ...{
        "sources": obj.sources
          ? obj.sources.map(item => {
              return model.NodeSourceOption.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NodePoolOptions): object {
    const jsonObj = {
      ...obj,
      ...{
        "sources": obj.sources
          ? obj.sources.map(item => {
              return model.NodeSourceOption.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
