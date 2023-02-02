import { getListingIds } from '../data/hackerNewsAPI';

export const mockStoryIds = () => Promise.resolve({
    ok: true,
    status: 200,
    json: async () => getListingIds
} as Response);

describe("Testing Service", () => {
    let fetchMock: any = undefined;

    beforeEach(() => {
        fetchMock = jest.spyOn(global, "fetch").mockImplementation(mockStoryIds);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('service called', () => {
        const baseUrl = "https://url.com"
        fetch(baseUrl);
        expect(fetchMock).toHaveBeenCalled();
        expect(fetchMock).toHaveBeenCalledWith(baseUrl);
    });

})


