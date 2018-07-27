<?php

namespace Gigasavvy\BetterRecentlyViewedProducts\Plugin\Magento\Catalog\Block\Ui;

class ProductViewCounter {

    protected $_productRepository;

    public function __construct(
        \Magento\Catalog\Api\ProductRepositoryInterface $productRepository
    ) {
        $this->_productRepository = $productRepository;
    }

    public function afterGetCurrentProductData(
        \Magento\Catalog\Block\Ui\ProductViewCounter $subject,
        $result
    ): string {
        $data = json_decode(json_encode(json_decode($result)), true); // turn json result from stdClass to array

        foreach($data['items'] as $key => $item) {
            $data['items'][$key]['extension_attributes']['sku'] = $this->_productRepository->getById($item['id'])->getSku(); // add sku
        }

        return json_encode($data);
    }
}