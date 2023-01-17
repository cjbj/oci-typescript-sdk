/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The summary of a specific User.
 */
export interface UserSummary {
  /**
   * The name of the User.
   */
  "name": string;
  /**
   * The status of the user account.
   */
  "status": UserSummary.Status;
  /**
   * The date and time of the expiration of the user account.
   */
  "timeExpiring"?: Date;
  /**
   * The default tablespace for data.
   */
  "defaultTablespace": string;
  /**
   * The name of the default tablespace for temporary tables or the name of a tablespace group.
   */
  "tempTablespace": string;
  /**
   * The date and time the user was created.
   */
  "timeCreated": Date;
  /**
   * The date the account was locked, if the status of the account is LOCKED.
   */
  "timeLocked"?: Date;
  /**
   * The profile name of the user.
   */
  "profile": string;
}

export namespace UserSummary {
  export enum Status {
    Open = "OPEN",
    Expired = "EXPIRED",
    ExpiredGrace = "EXPIRED_GRACE",
    Locked = "LOCKED",
    LockedTimed = "LOCKED_TIMED",
    ExpiredAndLocked = "EXPIRED_AND_LOCKED",
    ExpiredGraceAndLocked = "EXPIRED_GRACE_AND_LOCKED",
    ExpiredAndLockedTimed = "EXPIRED_AND_LOCKED_TIMED",
    ExpiredGraceAndLockedTimed = "EXPIRED_GRACE_AND_LOCKED_TIMED",
    OpenAndInRollover = "OPEN_AND_IN_ROLLOVER",
    ExpiredAndInRollover = "EXPIRED_AND_IN_ROLLOVER",
    LockedAndInRollover = "LOCKED_AND_IN_ROLLOVER",
    ExpiredAndLockedAndInRollover = "EXPIRED_AND_LOCKED_AND_IN_ROLLOVER",
    LockedTimedAndInRollover = "LOCKED_TIMED_AND_IN_ROLLOVER",
    ExpiredAndLockedTimedAndInRol = "EXPIRED_AND_LOCKED_TIMED_AND_IN_ROL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: UserSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
