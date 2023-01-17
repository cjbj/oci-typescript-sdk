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
 * A Kubernetes cluster. Avoid entering confidential information.
 */
export interface Cluster {
  /**
   * The OCID of the cluster.
   */
  "id"?: string;
  /**
   * The name of the cluster.
   */
  "name"?: string;
  /**
   * The OCID of the compartment in which the cluster exists.
   */
  "compartmentId"?: string;
  /**
   * The network configuration for access to the Cluster control plane.
   *
   */
  "endpointConfig"?: model.ClusterEndpointConfig;
  /**
   * The OCID of the virtual cloud network (VCN) in which the cluster exists.
   */
  "vcnId"?: string;
  /**
   * The version of Kubernetes running on the cluster masters.
   */
  "kubernetesVersion"?: string;
  /**
   * The OCID of the KMS key to be used as the master encryption key for Kubernetes secret encryption.
   */
  "kmsKeyId"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
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
   * Optional attributes for the cluster.
   */
  "options"?: model.ClusterCreateOptions;
  /**
   * Metadata about the cluster.
   */
  "metadata"?: model.ClusterMetadata;
  /**
   * The state of the cluster masters.
   */
  "lifecycleState"?: model.ClusterLifecycleState;
  /**
   * Details about the state of the cluster masters.
   */
  "lifecycleDetails"?: string;
  /**
   * Endpoints served up by the cluster masters.
   */
  "endpoints"?: model.ClusterEndpoints;
  /**
   * Available Kubernetes versions to which the clusters masters may be upgraded.
   */
  "availableKubernetesUpgrades"?: Array<string>;
  /**
   * The image verification policy for signature validation.
   *
   */
  "imagePolicyConfig"?: model.ImagePolicyConfig;
  /**
   * Available CNIs and network options for existing and new node pools of the cluster
   */
  "clusterPodNetworkOptions"?: Array<model.ClusterPodNetworkOptionDetails>;
}

export namespace Cluster {
  export function getJsonObj(obj: Cluster): object {
    const jsonObj = {
      ...obj,
      ...{
        "endpointConfig": obj.endpointConfig
          ? model.ClusterEndpointConfig.getJsonObj(obj.endpointConfig)
          : undefined,

        "options": obj.options ? model.ClusterCreateOptions.getJsonObj(obj.options) : undefined,
        "metadata": obj.metadata ? model.ClusterMetadata.getJsonObj(obj.metadata) : undefined,

        "endpoints": obj.endpoints ? model.ClusterEndpoints.getJsonObj(obj.endpoints) : undefined,

        "imagePolicyConfig": obj.imagePolicyConfig
          ? model.ImagePolicyConfig.getJsonObj(obj.imagePolicyConfig)
          : undefined,
        "clusterPodNetworkOptions": obj.clusterPodNetworkOptions
          ? obj.clusterPodNetworkOptions.map(item => {
              return model.ClusterPodNetworkOptionDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Cluster): object {
    const jsonObj = {
      ...obj,
      ...{
        "endpointConfig": obj.endpointConfig
          ? model.ClusterEndpointConfig.getDeserializedJsonObj(obj.endpointConfig)
          : undefined,

        "options": obj.options
          ? model.ClusterCreateOptions.getDeserializedJsonObj(obj.options)
          : undefined,
        "metadata": obj.metadata
          ? model.ClusterMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined,

        "endpoints": obj.endpoints
          ? model.ClusterEndpoints.getDeserializedJsonObj(obj.endpoints)
          : undefined,

        "imagePolicyConfig": obj.imagePolicyConfig
          ? model.ImagePolicyConfig.getDeserializedJsonObj(obj.imagePolicyConfig)
          : undefined,
        "clusterPodNetworkOptions": obj.clusterPodNetworkOptions
          ? obj.clusterPodNetworkOptions.map(item => {
              return model.ClusterPodNetworkOptionDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
