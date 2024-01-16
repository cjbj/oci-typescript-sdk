/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * A security assessment that provides an overall insight into your database security posture.
 * The security assessment results are based on the analysis of your database configurations,
 * user accounts, and security controls. For more information, see [Security Assessment Overview](https://docs.oracle.com/en/cloud/paas/data-safe/udscs/security-assessment-overview.html).
 *
 */
export interface SecurityAssessment {
  /**
   * The OCID of the security assessment.
   */
  "id": string;
  /**
   * The date and time the security assessment was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The date and time the security assessment was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated": Date;
  /**
   * The date and time the security assessment was last executed, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeLastAssessed"?: Date;
  /**
   * The OCID of the compartment that contains the security assessment.
   */
  "compartmentId": string;
  /**
   * The display name of the security assessment.
   */
  "displayName": string;
  /**
   * Array of database target OCIDs.
   */
  "targetIds": Array<string>;
  /**
   * List containing maps as values.
   * Example: {@code {\"Operations\": [ {\"CostCenter\": \"42\"} ] }}
   *
   */
  "ignoredTargets"?: Array<any>;
  /**
   * List containing maps as values.
   * Example: {@code {\"Operations\": [ {\"CostCenter\": \"42\"} ] }}
   *
   */
  "ignoredAssessmentIds"?: Array<any>;
  /**
   * The version of the target database.
   */
  "targetVersion"?: string;
  /**
   * Indicates whether or not the security assessment is set as a baseline. This is applicable only for saved security assessments.
   */
  "isBaseline"?: boolean;
  /**
   * Indicates if the assessment has deviated from the baseline.
   */
  "isDeviatedFromBaseline"?: boolean;
  /**
   * The OCID of the baseline against which the latest security assessment was compared.
   */
  "lastComparedBaselineId"?: string;
  /**
   * The current state of the security assessment.
   */
  "lifecycleState": model.SecurityAssessmentLifecycleState;
  /**
   * Details about the current state of the security assessment.
   */
  "lifecycleDetails"?: string;
  /**
   * The OCID of the security assessment that is responsible for creating this scheduled save assessment.
   */
  "scheduleSecurityAssessmentId"?: string;
  /**
   * Indicates whether the security assessment was created by system or by a user.
   */
  "triggeredBy"?: SecurityAssessment.TriggeredBy;
  /**
   * The description of the security assessment.
   */
  "description"?: string;
  /**
    * Schedule to save the assessment periodically in the specified format:
* <version-string>;<version-specific-schedule>
* <p>
Allowed version strings - \"v1\"
* v1's version specific schedule -<ss> <mm> <hh> <day-of-week> <day-of-month>
* Each of the above fields potentially introduce constraints. A workrequest is created only
* when clock time satisfies all the constraints. Constraints introduced:
* 1. seconds = <ss> (So, the allowed range for <ss> is [0, 59])
* 2. minutes = <mm> (So, the allowed range for <mm> is [0, 59])
* 3. hours = <hh> (So, the allowed range for <hh> is [0, 23])
* <day-of-week> can be either '*' (without quotes or a number between 1(Monday) and 7(Sunday))
* 4. No constraint introduced when it is '*'. When not, day of week must equal the given value
* <day-of-month> can be either '*' (without quotes or a number between 1 and 28)
* 5. No constraint introduced when it is '*'. When not, day of month must equal the given value
* 
    */
  "schedule"?: string;
  /**
   * The summary of findings for the security assessment
   *
   */
  "link"?: string;
  /**
    * The type of this security assessment. The possible types are:
* <p>
LATEST: The most up-to-date assessment that is running automatically for a target. It is system generated.
* SAVED: A saved security assessment. LATEST assessments are always saved in order to maintain the history of runs. A SAVED assessment is also generated by a 'refresh' action (triggered by the user).
* SAVE_SCHEDULE: The schedule for periodic saves of LATEST assessments.
* COMPARTMENT: An automatically managed assessment type that stores all details of targets in one compartment.
*  This type keeps an up-to-date assessment of all database risks in one compartment. It is automatically updated when
*  the latest assessment or refresh action is executed. It is also automatically updated when a target is deleted or move to a different compartment.
* 
    */
  "type": SecurityAssessment.Type;
  "statistics"?: model.SecurityAssessmentStatistics;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace SecurityAssessment {
  export enum TriggeredBy {
    User = "USER",
    System = "SYSTEM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Latest = "LATEST",
    Saved = "SAVED",
    SaveSchedule = "SAVE_SCHEDULE",
    Compartment = "COMPARTMENT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecurityAssessment): object {
    const jsonObj = {
      ...obj,
      ...{
        "statistics": obj.statistics
          ? model.SecurityAssessmentStatistics.getJsonObj(obj.statistics)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecurityAssessment): object {
    const jsonObj = {
      ...obj,
      ...{
        "statistics": obj.statistics
          ? model.SecurityAssessmentStatistics.getDeserializedJsonObj(obj.statistics)
          : undefined
      }
    };

    return jsonObj;
  }
}
