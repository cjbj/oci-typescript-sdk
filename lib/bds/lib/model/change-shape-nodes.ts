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
 * Individual worker nodes groups details.
 */
export interface ChangeShapeNodes {
  /**
   * Change shape of worker nodes to the desired target shape. Both VM_STANDARD and E4 Flex shapes are allowed here.
   */
  "worker"?: string;
  "workerShapeConfig"?: model.ShapeConfigDetails;
  /**
   * Change shape of compute only worker nodes to the desired target shape. Both VM_STANDARD and E4 Flex shapes are allowed here.
   */
  "computeOnlyWorker"?: string;
  "computeOnlyWorkerShapeConfig"?: model.ShapeConfigDetails;
  /**
   * Change shape of master nodes to the desired target shape. Both VM_STANDARD and E4 Flex shapes are allowed here.
   */
  "master"?: string;
  "masterShapeConfig"?: model.ShapeConfigDetails;
  /**
   * Change shape of utility nodes to the desired target shape. Both VM_STANDARD and E4 Flex shapes are allowed here.
   */
  "utility"?: string;
  "utilityShapeConfig"?: model.ShapeConfigDetails;
  /**
   * Change shape of the Cloud SQL node to the desired target shape. Both VM_STANDARD and E4 Flex shapes are allowed here.
   */
  "cloudsql"?: string;
  "cloudsqlShapeConfig"?: model.ShapeConfigDetails;
  /**
   * Change shape of edge nodes to the desired target shape. Both VM_STANDARD and E4 Flex shapes are allowed here.
   */
  "edge"?: string;
  "edgeShapeConfig"?: model.ShapeConfigDetails;
  /**
   * Change shape of Kafka Broker nodes to the desired target shape. Both VM_STANDARD and E4 Flex shapes are allowed here.
   */
  "kafkaBroker"?: string;
  "kafkaBrokerShapeConfig"?: model.ShapeConfigDetails;
}

export namespace ChangeShapeNodes {
  export function getJsonObj(obj: ChangeShapeNodes): object {
    const jsonObj = {
      ...obj,
      ...{
        "workerShapeConfig": obj.workerShapeConfig
          ? model.ShapeConfigDetails.getJsonObj(obj.workerShapeConfig)
          : undefined,

        "computeOnlyWorkerShapeConfig": obj.computeOnlyWorkerShapeConfig
          ? model.ShapeConfigDetails.getJsonObj(obj.computeOnlyWorkerShapeConfig)
          : undefined,

        "masterShapeConfig": obj.masterShapeConfig
          ? model.ShapeConfigDetails.getJsonObj(obj.masterShapeConfig)
          : undefined,

        "utilityShapeConfig": obj.utilityShapeConfig
          ? model.ShapeConfigDetails.getJsonObj(obj.utilityShapeConfig)
          : undefined,

        "cloudsqlShapeConfig": obj.cloudsqlShapeConfig
          ? model.ShapeConfigDetails.getJsonObj(obj.cloudsqlShapeConfig)
          : undefined,

        "edgeShapeConfig": obj.edgeShapeConfig
          ? model.ShapeConfigDetails.getJsonObj(obj.edgeShapeConfig)
          : undefined,

        "kafkaBrokerShapeConfig": obj.kafkaBrokerShapeConfig
          ? model.ShapeConfigDetails.getJsonObj(obj.kafkaBrokerShapeConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeShapeNodes): object {
    const jsonObj = {
      ...obj,
      ...{
        "workerShapeConfig": obj.workerShapeConfig
          ? model.ShapeConfigDetails.getDeserializedJsonObj(obj.workerShapeConfig)
          : undefined,

        "computeOnlyWorkerShapeConfig": obj.computeOnlyWorkerShapeConfig
          ? model.ShapeConfigDetails.getDeserializedJsonObj(obj.computeOnlyWorkerShapeConfig)
          : undefined,

        "masterShapeConfig": obj.masterShapeConfig
          ? model.ShapeConfigDetails.getDeserializedJsonObj(obj.masterShapeConfig)
          : undefined,

        "utilityShapeConfig": obj.utilityShapeConfig
          ? model.ShapeConfigDetails.getDeserializedJsonObj(obj.utilityShapeConfig)
          : undefined,

        "cloudsqlShapeConfig": obj.cloudsqlShapeConfig
          ? model.ShapeConfigDetails.getDeserializedJsonObj(obj.cloudsqlShapeConfig)
          : undefined,

        "edgeShapeConfig": obj.edgeShapeConfig
          ? model.ShapeConfigDetails.getDeserializedJsonObj(obj.edgeShapeConfig)
          : undefined,

        "kafkaBrokerShapeConfig": obj.kafkaBrokerShapeConfig
          ? model.ShapeConfigDetails.getDeserializedJsonObj(obj.kafkaBrokerShapeConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
