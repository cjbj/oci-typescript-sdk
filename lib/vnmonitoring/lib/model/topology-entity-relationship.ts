/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * Defines the relationship between Virtual Network topology entities.
 */
export interface TopologyEntityRelationship {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the first entity in the relationship.
   */
  "id1": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the second entity in the relationship.
   */
  "id2": string;

  "type": string;
}

export namespace TopologyEntityRelationship {
  export function getJsonObj(obj: TopologyEntityRelationship): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ROUTES_TO":
          return model.TopologyRoutesToEntityRelationship.getJsonObj(
            <model.TopologyRoutesToEntityRelationship>(<object>jsonObj),
            true
          );
        case "ASSOCIATED_WITH":
          return model.TopologyAssociatedWithEntityRelationship.getJsonObj(
            <model.TopologyAssociatedWithEntityRelationship>(<object>jsonObj),
            true
          );
        case "CONTAINS":
          return model.TopologyContainsEntityRelationship.getJsonObj(
            <model.TopologyContainsEntityRelationship>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TopologyEntityRelationship): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ROUTES_TO":
          return model.TopologyRoutesToEntityRelationship.getDeserializedJsonObj(
            <model.TopologyRoutesToEntityRelationship>(<object>jsonObj),
            true
          );
        case "ASSOCIATED_WITH":
          return model.TopologyAssociatedWithEntityRelationship.getDeserializedJsonObj(
            <model.TopologyAssociatedWithEntityRelationship>(<object>jsonObj),
            true
          );
        case "CONTAINS":
          return model.TopologyContainsEntityRelationship.getDeserializedJsonObj(
            <model.TopologyContainsEntityRelationship>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
