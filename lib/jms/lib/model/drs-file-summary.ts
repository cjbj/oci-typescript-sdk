/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * A Deployment Rule Set(DRS) is a JAR (Java ARchive) file used in Java applications to enforce security and manage compatibility
 * between different versions of Java applets and web start applications
 * (https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/deployment_rules.html).
 *
 */
export interface DrsFileSummary {
  /**
   * The Object Storage bucket name where the DRS file is located.
   */
  "bucketName": string;
  /**
   * The namespace for Object Storage.
   */
  "namespace": string;
  /**
   * The name of the DRS file in Object Store.
   */
  "drsFileName": string;
  /**
   * The unique identifier of the DRS file in Object Storage.
   */
  "drsFileKey": string;
  /**
   * The checksum type for the DRS file in Object Storage.
   */
  "checksumType": DrsFileSummary.ChecksumType;
  /**
   * The checksum value for the DRS file in Object Storage.
   */
  "checksumValue": string;
  /**
   * To check if the DRS file is the detfault ones.
   */
  "isDefault": boolean;
}

export namespace DrsFileSummary {
  export enum ChecksumType {
    Sha256 = "SHA256",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DrsFileSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrsFileSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
