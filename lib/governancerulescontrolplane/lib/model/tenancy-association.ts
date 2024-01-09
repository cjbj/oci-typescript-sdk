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
 * Tenancy association represents the tenancy id to which the governance rule will be applied.
 *
 */
export interface TenancyAssociation extends model.Association {
  /**
   * The Oracle ID ([OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)) of the tenancy to which the governance rule will be applied as part of this tenancy inclusion criterion.
   */
  "tenancyId": string;

  "type": string;
}

export namespace TenancyAssociation {
  export function getJsonObj(obj: TenancyAssociation, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Association.getJsonObj(obj) as TenancyAssociation)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "TENANCY";
  export function getDeserializedJsonObj(
    obj: TenancyAssociation,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Association.getDeserializedJsonObj(obj) as TenancyAssociation)),
      ...{}
    };

    return jsonObj;
  }
}
