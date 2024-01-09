/**
 * GovernanceRulesControlPlane API
 * A description of the GovernanceRulesControlPlane API
 * OpenAPI spec version: 20220504
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
 * Request object for Createinclusion criterion operation.
 */
export interface CreateInclusionCriterionDetails {
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the governance rule. Every inclusion criterion is associated with a governance rule.
   */
  "governanceRuleId": string;
  /**
   * Type of inclusion criterion - TENANCY, ALL or TAG. We support TENANCY and ALL for now.
   */
  "type": string;
  "association"?: model.TenancyAssociation;
}

export namespace CreateInclusionCriterionDetails {
  export function getJsonObj(obj: CreateInclusionCriterionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "association": obj.association ? model.Association.getJsonObj(obj.association) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateInclusionCriterionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "association": obj.association
          ? model.Association.getDeserializedJsonObj(obj.association)
          : undefined
      }
    };

    return jsonObj;
  }
}
