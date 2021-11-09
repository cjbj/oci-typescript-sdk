/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AccessRequest from "./access-request";
export import AccessRequest = AccessRequest.AccessRequest;
import * as AccessRequestCollection from "./access-request-collection";
export import AccessRequestCollection = AccessRequestCollection.AccessRequestCollection;
import * as AccessRequestHistoryCollection from "./access-request-history-collection";
export import AccessRequestHistoryCollection = AccessRequestHistoryCollection.AccessRequestHistoryCollection;
import * as AccessRequestHistorySummary from "./access-request-history-summary";
export import AccessRequestHistorySummary = AccessRequestHistorySummary.AccessRequestHistorySummary;
import * as AccessRequestLifecycleStates from "./access-request-lifecycle-states";
export import AccessRequestLifecycleStates = AccessRequestLifecycleStates.AccessRequestLifecycleStates;
import * as AccessRequestSeverities from "./access-request-severities";
export import AccessRequestSeverities = AccessRequestSeverities.AccessRequestSeverities;
import * as AccessRequestSummary from "./access-request-summary";
export import AccessRequestSummary = AccessRequestSummary.AccessRequestSummary;
import * as ApproveAccessRequestDetails from "./approve-access-request-details";
export import ApproveAccessRequestDetails = ApproveAccessRequestDetails.ApproveAccessRequestDetails;
import * as ChangeOperatorControlAssignmentCompartmentDetails from "./change-operator-control-assignment-compartment-details";
export import ChangeOperatorControlAssignmentCompartmentDetails = ChangeOperatorControlAssignmentCompartmentDetails.ChangeOperatorControlAssignmentCompartmentDetails;
import * as ChangeOperatorControlCompartmentDetails from "./change-operator-control-compartment-details";
export import ChangeOperatorControlCompartmentDetails = ChangeOperatorControlCompartmentDetails.ChangeOperatorControlCompartmentDetails;
import * as CreateOperatorControlAssignmentDetails from "./create-operator-control-assignment-details";
export import CreateOperatorControlAssignmentDetails = CreateOperatorControlAssignmentDetails.CreateOperatorControlAssignmentDetails;
import * as CreateOperatorControlDetails from "./create-operator-control-details";
export import CreateOperatorControlDetails = CreateOperatorControlDetails.CreateOperatorControlDetails;
import * as InfrastrcutureLayers from "./infrastrcuture-layers";
export import InfrastrcutureLayers = InfrastrcutureLayers.InfrastrcutureLayers;
import * as OperatorAction from "./operator-action";
export import OperatorAction = OperatorAction.OperatorAction;
import * as OperatorActionCategories from "./operator-action-categories";
export import OperatorActionCategories = OperatorActionCategories.OperatorActionCategories;
import * as OperatorActionCollection from "./operator-action-collection";
export import OperatorActionCollection = OperatorActionCollection.OperatorActionCollection;
import * as OperatorActionLifecycleStates from "./operator-action-lifecycle-states";
export import OperatorActionLifecycleStates = OperatorActionLifecycleStates.OperatorActionLifecycleStates;
import * as OperatorActionProperties from "./operator-action-properties";
export import OperatorActionProperties = OperatorActionProperties.OperatorActionProperties;
import * as OperatorActionSummary from "./operator-action-summary";
export import OperatorActionSummary = OperatorActionSummary.OperatorActionSummary;
import * as OperatorControl from "./operator-control";
export import OperatorControl = OperatorControl.OperatorControl;
import * as OperatorControlAssignment from "./operator-control-assignment";
export import OperatorControlAssignment = OperatorControlAssignment.OperatorControlAssignment;
import * as OperatorControlAssignmentCollection from "./operator-control-assignment-collection";
export import OperatorControlAssignmentCollection = OperatorControlAssignmentCollection.OperatorControlAssignmentCollection;
import * as OperatorControlAssignmentLifecycleStates from "./operator-control-assignment-lifecycle-states";
export import OperatorControlAssignmentLifecycleStates = OperatorControlAssignmentLifecycleStates.OperatorControlAssignmentLifecycleStates;
import * as OperatorControlAssignmentSummary from "./operator-control-assignment-summary";
export import OperatorControlAssignmentSummary = OperatorControlAssignmentSummary.OperatorControlAssignmentSummary;
import * as OperatorControlCollection from "./operator-control-collection";
export import OperatorControlCollection = OperatorControlCollection.OperatorControlCollection;
import * as OperatorControlLifecycleStates from "./operator-control-lifecycle-states";
export import OperatorControlLifecycleStates = OperatorControlLifecycleStates.OperatorControlLifecycleStates;
import * as OperatorControlSummary from "./operator-control-summary";
export import OperatorControlSummary = OperatorControlSummary.OperatorControlSummary;
import * as RejectAccessRequestDetails from "./reject-access-request-details";
export import RejectAccessRequestDetails = RejectAccessRequestDetails.RejectAccessRequestDetails;
import * as ResourceTypes from "./resource-types";
export import ResourceTypes = ResourceTypes.ResourceTypes;
import * as ReviewAccessRequestDetails from "./review-access-request-details";
export import ReviewAccessRequestDetails = ReviewAccessRequestDetails.ReviewAccessRequestDetails;
import * as RevokeAccessRequestDetails from "./revoke-access-request-details";
export import RevokeAccessRequestDetails = RevokeAccessRequestDetails.RevokeAccessRequestDetails;
import * as SortOrders from "./sort-orders";
export import SortOrders = SortOrders.SortOrders;
import * as UpdateOperatorControlAssignmentDetails from "./update-operator-control-assignment-details";
export import UpdateOperatorControlAssignmentDetails = UpdateOperatorControlAssignmentDetails.UpdateOperatorControlAssignmentDetails;
import * as UpdateOperatorControlDetails from "./update-operator-control-details";
export import UpdateOperatorControlDetails = UpdateOperatorControlDetails.UpdateOperatorControlDetails;
