/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * Security Question
 */
export interface SecurityQuestion {
  /**
   * Unique identifier for the SCIM Resource as defined by the Service Provider. Each representation of the Resource MUST include a non-empty id value. This identifier MUST be unique across the Service Provider's entire set of Resources. It MUST be a stable, non-reassignable identifier that does not change when the same Resource is returned in subsequent requests. The value of the id attribute is always issued by the Service Provider and MUST never be specified by the Service Consumer. bulkId: is a reserved keyword and MUST NOT be used in the unique identifier.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: always
   *  - type: string
   *  - uniqueness: global
   */
  "id"?: string;
  /**
   * Unique OCI identifier for the SCIM Resource.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: global
   */
  "ocid"?: string;
  /**
   * REQUIRED. The schemas attribute is an array of Strings which allows introspection of the supported schema version for a SCIM representation as well any schema extensions supported by that representation. Each String value must be a unique URI. This specification defines URIs for User, Group, and a standard \\\"enterprise\\\" extension. All representations of SCIM schema MUST include a non-zero value array with value(s) of the URIs supported by that representation. Duplicate values MUST NOT be included. Value order is not specified and MUST not impact behavior.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "schemas": Array<string>;
  "meta"?: model.Meta;
  "idcsCreatedBy"?: model.IdcsCreatedBy;
  "idcsLastModifiedBy"?: model.IdcsLastModifiedBy;
  /**
   * Each value of this attribute specifies an operation that only an internal client may perform on this particular resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsPreventedOperations"?: Array<SecurityQuestion.IdcsPreventedOperations>;
  /**
   * A list of tags on this resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [key, value]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "tags"?: Array<model.Tags>;
  /**
   * A boolean flag indicating this resource in the process of being deleted. Usually set to true when synchronous deletion of the resource would take too long.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "deleteInProgress"?: boolean;
  /**
   * The release number when the resource was upgraded.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsLastUpgradedInRelease"?: string;
  /**
   * OCI Domain Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "domainOcid"?: string;
  /**
   * OCI Compartment Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "compartmentOcid"?: string;
  /**
   * OCI Tenant Id (ocid) in which the resource lives.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "tenancyOcid"?: string;
  /**
   * An identifier for the Resource as defined by the Service Consumer. The externalId may simplify identification of the Resource between Service Consumer and Service Provider by allowing the Consumer to refer to the Resource with its own identifier, obviating the need to store a local mapping between the local identifier of the Resource and the identifier used by the Service Provider. Each Resource MAY include a non-empty externalId value. The value of the externalId attribute is always issued by the Service Consumer and can never be specified by the Service Provider. The Service Provider MUST always interpret the externalId as scoped to the Service Consumer's tenant.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "externalId"?: string;
  /**
   * This indicates if the question is selected by the Security Admin and is available for the end user.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: always
   *  - type: boolean
   *  - uniqueness: none
   */
  "active": boolean;
  /**
   * This indicates if the question is a Custom Question added by the Security Admin.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: always
   *  - type: string
   *  - uniqueness: none
   */
  "type": SecurityQuestion.Type;
  /**
   * Locale values for the Question
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: true
   *  - returned: always
   *  - idcsCompositeKey: [locale]
   *  - type: complex
   *  - uniqueness: none
   */
  "questionText": Array<model.SecurityQuestionQuestionText>;
}

export namespace SecurityQuestion {
  export enum IdcsPreventedOperations {
    Replace = "replace",
    Update = "update",
    Delete = "delete",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Default = "default",
    Custom = "custom",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecurityQuestion): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getJsonObj(item);
            })
          : undefined,

        "questionText": obj.questionText
          ? obj.questionText.map(item => {
              return model.SecurityQuestionQuestionText.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecurityQuestion): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getDeserializedJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getDeserializedJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getDeserializedJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getDeserializedJsonObj(item);
            })
          : undefined,

        "questionText": obj.questionText
          ? obj.questionText.map(item => {
              return model.SecurityQuestionQuestionText.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
