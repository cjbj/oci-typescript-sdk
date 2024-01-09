/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Possible types of strategies to perform the fleet discovery for a Fleet Software Update Collection.
 *
 **/
export enum FleetDiscoveryStrategies {
  SearchQuery = "SEARCH_QUERY",
  Filters = "FILTERS",
  TargetList = "TARGET_LIST",
  DiscoveryResults = "DISCOVERY_RESULTS",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace FleetDiscoveryStrategies {
  export function getJsonObj(obj: FleetDiscoveryStrategies): FleetDiscoveryStrategies {
    return obj;
  }
  export function getDeserializedJsonObj(obj: FleetDiscoveryStrategies): FleetDiscoveryStrategies {
    return obj;
  }
}
