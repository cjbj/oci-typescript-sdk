/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
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

export interface CreateTagDefaultDetails {
  /**
   * The OCID of the compartment. The tag default will be applied to all new resources created in this compartment.
   *
   */
  "compartmentId": string;
  /**
   * The OCID of the tag definition. The tag default will always assign a default value for this tag definition.
   *
   */
  "tagDefinitionId": string;
  /**
   * The default value for the tag definition. This will be applied to all new resources created in the compartment.
   *
   */
  "value": string;
  /**
    * If you specify that a value is required, a value is set during resource creation (either by
* the user creating the resource or another tag defualt). If no value is set, resource
* creation is blocked.
* <p>
* If the {@code isRequired} flag is set to \"true\", the value is set during resource creation.
* * If the {@code isRequired} flag is set to \"false\", the value you enter is set during resource creation.
* <p>
Example: {@code false}
* 
    */
  "isRequired"?: boolean;
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.AddLockDetails>;
}

export namespace CreateTagDefaultDetails {
  export function getJsonObj(obj: CreateTagDefaultDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.AddLockDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateTagDefaultDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.AddLockDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
