/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * The information about the Kafka service to be added.
 */
export interface AddKafkaDetails {
  /**
   * Shape of the Kafka broker node.
   */
  "shape": string;
  /**
   * Number of Kafka nodes for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfKafkaNodes": number;
  "shapeConfig"?: model.ShapeConfigDetails;
  /**
   * The size of block volme in GB to be attached to the given node. All details needed for attaching the block volume are managed by the service itself.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "blockVolumeSizeInGBs"?: number;
  /**
   * Base-64 encoded password for the cluster admin user.
   */
  "clusterAdminPassword": string;
}

export namespace AddKafkaDetails {
  export function getJsonObj(obj: AddKafkaDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeConfig": obj.shapeConfig
          ? model.ShapeConfigDetails.getJsonObj(obj.shapeConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddKafkaDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeConfig": obj.shapeConfig
          ? model.ShapeConfigDetails.getDeserializedJsonObj(obj.shapeConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
