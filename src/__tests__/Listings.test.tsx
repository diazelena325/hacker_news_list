import { cleanup } from '@testing-library/react';
import { getListingIds } from '../data/hackerNewsAPI';
import { storyIds } from '../fixtures/fixtures';

beforeEach(() => {
    cleanup();
    jest.resetAllMocks();
});

jest.mock('../data/hackerNewsAPI', () => ({
    getListingIds: jest.fn(),
}));
const mockGetListingIds = getListingIds as jest.MockedFunction < typeof getListingIds>;

test('rendering listing ids component with content', async () => {
    mockGetListingIds.mockResolvedValue(storyIds);

    const getteststory = await getListingIds();
    expect(getListingIds).toHaveBeenCalledTimes(1);
    expect(getteststory).toMatchSnapshot();
});