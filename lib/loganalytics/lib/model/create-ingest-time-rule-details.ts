/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The information required to create an ingest time rule.
 *
 */
export interface CreateIngestTimeRuleDetails {
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * Description for this resource.
   *
   */
  "description"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The ingest time rule display name.
   */
  "displayName": string;
  "conditions": model.IngestTimeRuleFieldCondition;
  /**
   * The action(s) to be performed if the ingest time rule condition(s) are satisfied.
   *
   */
  "actions": Array<model.IngestTimeRuleAction>;
}

export namespace CreateIngestTimeRuleDetails {
  export function getJsonObj(obj: CreateIngestTimeRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "conditions": obj.conditions
          ? model.IngestTimeRuleCondition.getJsonObj(obj.conditions)
          : undefined,
        "actions": obj.actions
          ? obj.actions.map(item => {
              return model.IngestTimeRuleAction.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateIngestTimeRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "conditions": obj.conditions
          ? model.IngestTimeRuleCondition.getDeserializedJsonObj(obj.conditions)
          : undefined,
        "actions": obj.actions
          ? obj.actions.map(item => {
              return model.IngestTimeRuleAction.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
