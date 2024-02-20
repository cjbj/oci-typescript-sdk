/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * An object that represents an action to apply to a listener.
 */
export interface Rule {
  "action": string;
}

export namespace Rule {
  export function getJsonObj(obj: Rule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "action" in obj && obj.action) {
      switch (obj.action) {
        case "ADD_HTTP_REQUEST_HEADER":
          return model.AddHttpRequestHeaderRule.getJsonObj(
            <model.AddHttpRequestHeaderRule>(<object>jsonObj),
            true
          );
        case "REDIRECT":
          return model.RedirectRule.getJsonObj(<model.RedirectRule>(<object>jsonObj), true);
        case "REMOVE_HTTP_REQUEST_HEADER":
          return model.RemoveHttpRequestHeaderRule.getJsonObj(
            <model.RemoveHttpRequestHeaderRule>(<object>jsonObj),
            true
          );
        case "EXTEND_HTTP_REQUEST_HEADER_VALUE":
          return model.ExtendHttpRequestHeaderValueRule.getJsonObj(
            <model.ExtendHttpRequestHeaderValueRule>(<object>jsonObj),
            true
          );
        case "REMOVE_HTTP_RESPONSE_HEADER":
          return model.RemoveHttpResponseHeaderRule.getJsonObj(
            <model.RemoveHttpResponseHeaderRule>(<object>jsonObj),
            true
          );
        case "CONTROL_ACCESS_USING_HTTP_METHODS":
          return model.ControlAccessUsingHttpMethodsRule.getJsonObj(
            <model.ControlAccessUsingHttpMethodsRule>(<object>jsonObj),
            true
          );
        case "ALLOW":
          return model.AllowRule.getJsonObj(<model.AllowRule>(<object>jsonObj), true);
        case "HTTP_HEADER":
          return model.HttpHeaderRule.getJsonObj(<model.HttpHeaderRule>(<object>jsonObj), true);
        case "ADD_HTTP_RESPONSE_HEADER":
          return model.AddHttpResponseHeaderRule.getJsonObj(
            <model.AddHttpResponseHeaderRule>(<object>jsonObj),
            true
          );
        case "EXTEND_HTTP_RESPONSE_HEADER_VALUE":
          return model.ExtendHttpResponseHeaderValueRule.getJsonObj(
            <model.ExtendHttpResponseHeaderValueRule>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.action}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Rule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "action" in obj && obj.action) {
      switch (obj.action) {
        case "ADD_HTTP_REQUEST_HEADER":
          return model.AddHttpRequestHeaderRule.getDeserializedJsonObj(
            <model.AddHttpRequestHeaderRule>(<object>jsonObj),
            true
          );
        case "REDIRECT":
          return model.RedirectRule.getDeserializedJsonObj(
            <model.RedirectRule>(<object>jsonObj),
            true
          );
        case "REMOVE_HTTP_REQUEST_HEADER":
          return model.RemoveHttpRequestHeaderRule.getDeserializedJsonObj(
            <model.RemoveHttpRequestHeaderRule>(<object>jsonObj),
            true
          );
        case "EXTEND_HTTP_REQUEST_HEADER_VALUE":
          return model.ExtendHttpRequestHeaderValueRule.getDeserializedJsonObj(
            <model.ExtendHttpRequestHeaderValueRule>(<object>jsonObj),
            true
          );
        case "REMOVE_HTTP_RESPONSE_HEADER":
          return model.RemoveHttpResponseHeaderRule.getDeserializedJsonObj(
            <model.RemoveHttpResponseHeaderRule>(<object>jsonObj),
            true
          );
        case "CONTROL_ACCESS_USING_HTTP_METHODS":
          return model.ControlAccessUsingHttpMethodsRule.getDeserializedJsonObj(
            <model.ControlAccessUsingHttpMethodsRule>(<object>jsonObj),
            true
          );
        case "ALLOW":
          return model.AllowRule.getDeserializedJsonObj(<model.AllowRule>(<object>jsonObj), true);
        case "HTTP_HEADER":
          return model.HttpHeaderRule.getDeserializedJsonObj(
            <model.HttpHeaderRule>(<object>jsonObj),
            true
          );
        case "ADD_HTTP_RESPONSE_HEADER":
          return model.AddHttpResponseHeaderRule.getDeserializedJsonObj(
            <model.AddHttpResponseHeaderRule>(<object>jsonObj),
            true
          );
        case "EXTEND_HTTP_RESPONSE_HEADER_VALUE":
          return model.ExtendHttpResponseHeaderValueRule.getDeserializedJsonObj(
            <model.ExtendHttpResponseHeaderValueRule>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.action}`);
      }
    }
    return jsonObj;
  }
}
