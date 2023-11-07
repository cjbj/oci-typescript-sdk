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
 * A summary of the Java release properties.
 */
export interface JavaReleaseSummary {
  /**
   * Java release version identifier.
   */
  "releaseVersion": string;
  /**
   * Java release family identifier.
   */
  "familyVersion": string;
  /**
   * Parent Java release version identifier. This is applicable for BPR releases.
   */
  "parentReleaseVersion"?: string;
  /**
   * The security status of the Java version.
   */
  "securityStatus": model.JreSecurityStatus;
  /**
   * Release category of the Java version.
   */
  "releaseType": model.ReleaseType;
  /**
   * License type for the Java version.
   */
  "licenseType": model.LicenseType;
  "familyDetails"?: model.JavaFamily;
  "licenseDetails"?: model.JavaLicense;
  /**
   * The release date of the Java version (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "releaseDate": Date;
  /**
   * Release notes associated with the Java version.
   */
  "releaseNotesUrl": string;
  /**
   * Artifact content types for the Java version.
   */
  "artifactContentTypes": Array<JavaReleaseSummary.ArtifactContentTypes>;
  /**
   * List of My Oracle Support(MoS) patches available for this release.
   * This information is only available for `BPR` release type.
   *
   */
  "mosPatches"?: Array<model.PatchDetail>;
  /**
   * The number of days since this release has been under the security baseline. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "daysUnderSecurityBaseline"?: number;
}

export namespace JavaReleaseSummary {
  export enum ArtifactContentTypes {
    Jdk = "JDK",
    Jre = "JRE",
    ServerJre = "SERVER_JRE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: JavaReleaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "familyDetails": obj.familyDetails
          ? model.JavaFamily.getJsonObj(obj.familyDetails)
          : undefined,
        "licenseDetails": obj.licenseDetails
          ? model.JavaLicense.getJsonObj(obj.licenseDetails)
          : undefined,

        "mosPatches": obj.mosPatches
          ? obj.mosPatches.map(item => {
              return model.PatchDetail.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JavaReleaseSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "familyDetails": obj.familyDetails
          ? model.JavaFamily.getDeserializedJsonObj(obj.familyDetails)
          : undefined,
        "licenseDetails": obj.licenseDetails
          ? model.JavaLicense.getDeserializedJsonObj(obj.licenseDetails)
          : undefined,

        "mosPatches": obj.mosPatches
          ? obj.mosPatches.map(item => {
              return model.PatchDetail.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
