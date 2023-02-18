# CAMPAIGN-MANAGEMENT-TOOL

<!-- Basic Project/Campaign Management tool
Create a CRUD page for Project - containing folowing fields in the `project_table`
id - Int, Unique, Auto Increment
project_name - Text
open_cost - Float, default 5
target_opens - int, default 100
click_cost - Float, default 10
target_clicks - int, default 50
status - [0 = Inactive, 1=Active], Default - 1
Create CRUD page for Campaigns
1 project can have multiple campaigns.
a campign contains following attributes:
id - Int, Unique, Auto Increment
project_id - foreign key to project table
campaign_name - Text
opens - int, default 0
clicks - int, default 0
status - [0 = Inactive, 1=Active], Default - 1

Create a subpage (localhost/mytask/landing?campaign_id=xxx) - this page takes
campaign_id as query parameter, if campaign ID is not provided in parameter then return
404 header.
subpage also has a button [Click Me]

Whenever this subpage is opened on web with a campaign_id, the corresponding
campaign `opens` field will be incremented by 1
Whenever this subpage's [Click Me] button is clicked, the corresponding campaign
`clicks` field will be incremented by 1

Create Project Stats page that contains following data in a table with pagination for 5
projects per page
ID, Project Name, Total Campaigns, Total Opens Required, Total Opens Acheived, Total
Clicks Required, Total Clicks Acheived, Open Cost, Total Open Cost, Click Cost, Total
Clicks Cost, Status -->
