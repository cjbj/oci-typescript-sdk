/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The required data to create a custom protection rule.
 * For more information about custom protection rules, see [Custom Protection Rules](https://docs.cloud.oracle.com/iaas/Content/WAF/Tasks/customprotectionrules.htm).
 * **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 */
export interface CreateCustomProtectionRuleDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which to create the custom protection rule.
   */
  "compartmentId": string;
  /**
   * A user-friendly name for the custom protection rule.
   */
  "displayName": string;
  /**
   * A description for the Custom Protection rule.
   */
  "description"?: string;
  /**
    * The template text of the custom protection rule. All custom protection rules are expressed in ModSecurity Rule Language.
* <p>
Additionally, each rule must include two placeholder variables that are updated by the WAF service upon publication of the rule.
* <p>
`id: {{id_1}}` - This field is populated with a unique rule ID generated by the WAF service which identifies a `SecRule`. More than one `SecRule` can be defined in the `template` field of a CreateCustomSecurityRule call. The value of the first `SecRule` must be `id: {{id_1}}` and the `id` field of each subsequent `SecRule` should increase by one, as shown in the example.
* <p>
`ctl:ruleEngine={{mode}}` - The action to be taken when the criteria of the `SecRule` are met, either `OFF`, `DETECT` or `BLOCK`. This field is automatically populated with the corresponding value of the `action` field of the `CustomProtectionRuleSetting` schema when the `WafConfig` is updated.
* <p>
*Example:*
*   ```
*   SecRule REQUEST_COOKIES \"regex matching SQL injection - part 1/2\" \\
*           \"phase:2,                                                 \\
*           msg:'Detects chained SQL injection attempts 1/2.',        \\
*           id: {{id_1}},                                             \\
*           ctl:ruleEngine={{mode}},                                  \\
*           deny\"
*   SecRule REQUEST_COOKIES \"regex matching SQL injection - part 2/2\" \\
*           \"phase:2,                                                 \\
*           msg:'Detects chained SQL injection attempts 2/2.',        \\
*           id: {{id_2}},                                             \\
*           ctl:ruleEngine={{mode}},                                  \\
*           deny\"
*   ```
* <p>

* The example contains two `SecRules` each having distinct regex expression to match the `Cookie` header value during the second input analysis phase.
* <p>
For more information about custom protection rules, see [Custom Protection Rules](https://docs.cloud.oracle.com/Content/WAF/Tasks/customprotectionrules.htm).
* <p>
For more information about ModSecurity syntax, see [Making Rules: The Basic Syntax](https://www.modsecurity.org/CRS/Documentation/making.html).
* <p>
For more information about ModSecurity's open source WAF rules, see [Mod Security's OWASP Core Rule Set documentation](https://www.modsecurity.org/CRS/Documentation/index.html).
    */
  "template": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateCustomProtectionRuleDetails {
  export function getJsonObj(obj: CreateCustomProtectionRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCustomProtectionRuleDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
