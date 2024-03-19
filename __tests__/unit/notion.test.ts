/**
 * @jest-environment node
 */

import { CreatePageParams, addToMarketingCrm, deleteRecord, upsertRecord } from "@/lib/externalRequests/notion";
import { describe, expect, it, afterAll } from "@jest/globals";
import { PageObjectResponse, RichTextItemResponse, UpdatePageResponse } from "@notionhq/client/build/src/api-endpoints";


describe("test notion functions", () => {
    const record: CreatePageParams = {
        email: "email@example.com",
        message: "message",
        name: "name",
        referral: "facebook",

    }


    it('should add contact to marketing Using Small contact form data', async () => {

        const resp = await upsertRecord({
            email: record.email,
            name: record.name,
            message: record.message,
            referral: record.referral
        }) as PageObjectResponse
        expect((resp.properties.Name as { type: 'title', title: Array<RichTextItemResponse> }).title[0].plain_text).toBe(record.name)
    })

    it('should update a contact to marketing db', async () => {

        const resp = await upsertRecord({
            ...record,
            name: "New Name"
        }) as PageObjectResponse

        expect((resp.properties.Name as { type: 'title', title: Array<RichTextItemResponse> }).title[0].plain_text).toBe('New Name')
    })


    it('should delete as  contact to marketing Using email', async () => {

        const resp = await deleteRecord(record.email)

        //console.log(resp);
        expect(resp.object).toBe('page')
    })

})