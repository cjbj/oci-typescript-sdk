/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
* Pattern describing an http/https URL or set thereof
* as a concatenation of optional host component and optional path component.
* <p>
{@code *.example.com} will match http://example.com/ and https://foo.example.com/foo?bar.
* <p>
{@code www.example.com/foo*} will match https://www.example.com/foo and http://www.exampe.com/foobar and https://www.example.com/foo/bar?baz, but not
* http://sub.www.example.com/foo or https://www.example.com/FOO.
* <p>
{@code *.example.com/foo*} will match http://example.com/foo and https://sub2.sub.example.com/foo/bar?baz, but not http://example.com/FOO.
* 
*/
export interface SimpleUrlPattern extends model.UrlPattern {
  /**
   * A string consisting of a concatenation of optional host component and optional path component.
   * The host component may start with {@code *.} to match the case-insensitive domain and all its subdomains.
   * The path component must start with a {@code /}, and may end with {@code *} to match all paths of which it is a case-sensitive prefix.
   * A missing host component matches all request domains, and a missing path component matches all request paths.
   * An empty value matches all requests.
   *
   */
  "pattern": string;

  "type": string;
}

export namespace SimpleUrlPattern {
  export function getJsonObj(obj: SimpleUrlPattern, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.UrlPattern.getJsonObj(obj) as SimpleUrlPattern)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "SIMPLE";
  export function getDeserializedJsonObj(obj: SimpleUrlPattern, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UrlPattern.getDeserializedJsonObj(obj) as SimpleUrlPattern)),
      ...{}
    };

    return jsonObj;
  }
}
